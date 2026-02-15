"use client";

import { useEffect, useState } from "react";
import { PLACES, PlaceKey } from "@/lib/places";
import type { Mode, Lang } from "@/lib/pharaoh";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatPanel({
  placeKey,
  mode,
  lang,
  onModeChange,
  onLangChange,
  onPlaceChange,
}: {
  placeKey: PlaceKey;
  mode: Mode;
  lang: Lang;
  onModeChange: (m: Mode) => void;
  onLangChange: (l: Lang) => void;
  onPlaceChange: (p: PlaceKey) => void;
}) {
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        lang === "ar" ? "👑 أنا نَخِت-حُتب… اسألني." : "👑 I’m Nakhet-Hotep. Ask me.",
    },
  ]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMsgs([
      {
        role: "assistant",
        content:
          lang === "ar"
            ? "👑 أنا نَخِت-حُتب… اسألني عن هذا الموقع."
            : "👑 I’m Nakhet-Hotep. Ask me about this place.",
      },
    ]);
  }, [lang, placeKey]);

  const place = PLACES[placeKey];

  async function send() {
    const message = text.trim();
    if (!message || loading) return;

    setText("");
    const next = [...msgs, { role: "user" as const, content: message }];
    setMsgs(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          mode,
          lang,
          placeKey,
          history: next.filter(
            (m) => m.role !== "assistant" || m.content.length < 1000,
          ),
        }),
      });

      const data = await res.json();
      setMsgs([
        ...next,
        {
          role: "assistant",
          content: data.text ?? (lang === "ar" ? "حصل خطأ." : "Error."),
        },
      ]);
    } catch {
      setMsgs([
        ...next,
        { role: "assistant", content: lang === "ar" ? "حصل خطأ." : "Error." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold">اسأل الفرعون</div>
          <div className="text-xs text-white/60">
            {place.name_ar} • {mode} • {lang}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
            value={placeKey}
            onChange={(e) => onPlaceChange(e.target.value as PlaceKey)}
          >
            {Object.entries(PLACES).map(([k, v]) => (
              <option key={k} value={k}>
                {v.name_ar}
              </option>
            ))}
          </select>

          <select
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
            value={mode}
            onChange={(e) => onModeChange(e.target.value as Mode)}
          >
            <option value="tourist">Tourist</option>
            <option value="educational">Educational</option>
            <option value="kids">Kids</option>
            <option value="story">Story</option>
          </select>

          <select
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
            value={lang}
            onChange={(e) => onLangChange(e.target.value as Lang)}
          >
            <option value="ar">AR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>

      <div className="h-[520px] space-y-3 overflow-y-auto pe-1">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "ms-auto w-[92%] rounded-2xl border border-white/10 bg-white/10 px-4 py-3"
                : "me-auto w-[92%] rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 px-4 py-3"
            }
          >
            {m.content}
          </div>
        ))}
        {loading ? (
          <div className="me-auto w-[60%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/60">
            {lang === "ar" ? "…بفكر" : "…thinking"}
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={lang === "ar" ? "اكتب سؤالك هنا..." : "Type your question..."}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
        />
        <button
          onClick={send}
          className="rounded-xl bg-[var(--gold)] px-5 py-3 font-semibold text-black shadow-[0_0_32px_rgba(212,175,55,0.14)] hover:brightness-110 active:brightness-95"
        >
          {lang === "ar" ? "إرسال" : "Send"}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {[
          lang === "ar" ? "احكيلي عن المكان ده" : "Tell me about this site",
          lang === "ar" ? "ليه كان فيه ألوان؟" : "Why were there colors?",
          lang === "ar" ? "إيه أهم حاجة أشوفها؟" : "What’s the must-see spot?",
          lang === "ar" ? "احكيلي قصة قصيرة" : "Tell me a short story",
        ].map((q) => (
          <button
            key={q}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm hover:bg-white/10"
            onClick={() => setText(q)}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
