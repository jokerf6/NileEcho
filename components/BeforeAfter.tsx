"use client";

import { PLACES, PlaceKey } from "@/lib/places";
import { useState } from "react";

export default function BeforeAfter({ placeKey }: { placeKey: PlaceKey }) {
  const place = PLACES[placeKey];
  const [pct, setPct] = useState(50);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-semibold">شوف التحول</div>
        <div className="text-xs text-white/60">{place.name_ar}</div>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
        <img src={place.afterImg} className="absolute inset-0 h-full w-full object-cover" alt="after" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
          <img src={place.beforeImg} className="h-full w-full object-cover" alt="before" />
        </div>

        <div className="absolute bottom-0 top-0" style={{ left: `${pct}%` }}>
          <div className="h-full w-[2px] bg-[var(--cyan)] shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
        </div>

        <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs">
          Now
        </div>
        <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs">
          Then
        </div>
      </div>

      <input
        className="mt-4 w-full"
        type="range"
        min={5}
        max={95}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
      />

      <div className="mt-2 text-xs text-white/60">إعادة تخيل رقمية لأغراض تعليمية/سياحية.</div>
    </div>
  );
}
