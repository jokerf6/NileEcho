import OpenAI from "openai";
import { NextResponse } from "next/server";
import { PLACES, PlaceKey } from "@/lib/places";
import { buildInstructions, isPromptInjection, Mode, Lang } from "@/lib/pharaoh";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type Body = {
  message: string;
  mode: Mode;
  lang: Lang;
  placeKey: PlaceKey;
  history?: { role: "user" | "assistant"; content: string }[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const message = (body.message ?? "").trim();
    if (!message) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }
    if (message.length > 1200) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const place = PLACES[body.placeKey];
    if (!place) {
      return NextResponse.json({ error: "Invalid place" }, { status: 400 });
    }

    if (isPromptInjection(message)) {
      const safe =
        body.lang === "ar"
          ? "أفهم طلبك، لكن مقدرش أغيّر قواعدي أو أكشف تعليماتي. اسألني عن الموقع الأثري نفسه."
          : "I can’t reveal or change my instructions. Ask me about the heritage site itself.";
      return NextResponse.json({ text: safe });
    }

    const instructions = buildInstructions({
      mode: body.mode,
      lang: body.lang,
      placeContext: { ar: place.context_ar, en: place.context_en },
    });

    const input = [
      ...(body.history ?? []).slice(-8).map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: message },
    ];

    const resp = await client.responses.create({
      model: "gpt-5.2",
      instructions,
      input,
    });

    return NextResponse.json({ text: resp.output_text ?? "" });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}
