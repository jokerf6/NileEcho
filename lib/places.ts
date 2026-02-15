export type PlaceKey = "karnak" | "abu_simbel" | "giza";

export const PLACES: Record<
  PlaceKey,
  {
    name_ar: string;
    name_en: string;
    context_ar: string;
    context_en: string;
    beforeImg: string;
    afterImg: string;
  }
> = {
  karnak: {
    name_ar: "معبد الكرنك",
    name_en: "Karnak Temple",
    context_ar:
      "الكرنك مجمع معابد ضخم في الأقصر مرتبط بآمون رع، توسّع عبر قرون. ركّز على: قاعة الأعمدة الكبرى، المحاور الطقسية، الألوان الأصلية، ووظيفة النقوش.",
    context_en:
      "Karnak is a vast temple complex in Luxor associated with Amun-Ra, expanded over centuries. Focus on: Great Hypostyle Hall, ritual axes, original pigments, and the function of inscriptions.",
    beforeImg: "/places/karnak-before.svg",
    afterImg: "/places/karnak-after.svg",
  },
  abu_simbel: {
    name_ar: "أبو سمبل",
    name_en: "Abu Simbel",
    context_ar:
      "أبو سمبل معبدان منحوتان في الصخر لرمسيس الثاني ونفرتاري، مشهور بتماثيل الواجهة ومحاذاة الشمس داخل قدس الأقداس في أيام محددة.",
    context_en:
      "Abu Simbel consists of two rock-cut temples of Ramesses II and Nefertari, famous for the colossal façade and solar alignment into the sanctuary on specific dates.",
    beforeImg: "/places/abu-before.svg",
    afterImg: "/places/abu-after.svg",
  },
  giza: {
    name_ar: "هضبة الجيزة",
    name_en: "Giza Plateau",
    context_ar:
      "الجيزة تضم أهرامات خوفو وخفرع ومنقرع وأبو الهول. ركّز على: الغرض الجنائزي، التخطيط، الأدلة الأثرية، وتجنب الأساطير غير الموثقة.",
    context_en:
      "Giza includes the pyramids of Khufu, Khafre, Menkaure and the Sphinx. Focus on: funerary purpose, planning, archaeological evidence, and avoid unsupported myths.",
    beforeImg: "/places/giza-before.svg",
    afterImg: "/places/giza-after.svg",
  },
};
