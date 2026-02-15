"use client";

import { useState } from "react";
import ChatPanel from "@/components/ChatPanel";
import BeforeAfter from "@/components/BeforeAfter";
import { Navbar } from "@/components/navbar";
import type { Mode, Lang } from "@/lib/pharaoh";
import type { PlaceKey } from "@/lib/places";

export default function DemoPage() {
  const [placeKey, setPlaceKey] = useState<PlaceKey>("karnak");
  const [mode, setMode] = useState<Mode>("tourist");
  const [lang, setLang] = useState<Lang>("ar");

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ChatPanel
              placeKey={placeKey}
              mode={mode}
              lang={lang}
              onModeChange={setMode}
              onLangChange={setLang}
              onPlaceChange={setPlaceKey}
            />
          </div>

          <div className="lg:col-span-5">
            <BeforeAfter placeKey={placeKey} />
          </div>
        </div>
      </div>
    </div>
  );
}
