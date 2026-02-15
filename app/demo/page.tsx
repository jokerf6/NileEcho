const prompts = ['احكيلي عن الكرنك', 'ليه الأهرامات اتبنت كده؟', 'إيه معنى النقش ده؟', 'ايه أهم 3 حاجات لازم أشوفهم؟'];

export default function DemoPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-8">
      <div className="grid gap-6 lg:grid-cols-12">
        <section className="nile-card flex flex-col p-5 lg:col-span-7">
          <header className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <h1 className="text-2xl font-bold">اسأل الفرعون</h1>
            <div className="flex gap-2 text-xs">
              <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1">Arabic / English</span>
              <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1">عامي / رسمي</span>
            </div>
          </header>

          <div className="h-[520px] space-y-3 overflow-y-auto pr-1">
            <div className="max-w-[80%] rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 px-4 py-3">
              👑 المعابد عند المصري القديم كانت مراكز عبادة وعلم وسياسة.
            </div>
            <div className="mr-auto max-w-[80%] rounded-2xl border border-white/10 bg-white/10 px-4 py-3">طب والكرنك كان مميز بإيه؟</div>
            <div className="max-w-[80%] rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 px-4 py-3">
              الكرنك مجمع ضخم بُني على مراحل، أشهره صالة الأعمدة العظيمة.
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {prompts.map((prompt) => (
              <button key={prompt} className="prompt-chip" type="button">
                {prompt}
              </button>
            ))}
          </div>

          <div className="sticky bottom-0 mt-4 rounded-2xl border border-white/10 bg-bg1/70 p-3 backdrop-blur">
            <div className="flex gap-2">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 outline-none ring-cyan/30 focus:ring"
                placeholder="اكتب سؤالك هنا..."
              />
              <button className="btn-primary" type="button">
                إرسال
              </button>
            </div>
            <button className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/50" disabled type="button">
              اسمع الإجابة (قريبًا)
            </button>
          </div>
        </section>

        <aside className="nile-card space-y-4 p-5 lg:col-span-5">
          <h2 className="text-xl font-bold">شوف التحول</h2>
          <select className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <option>Karnak</option>
            <option>Abu Simbel</option>
            <option>Giza</option>
          </select>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/70">
              <span>Then</span>
              <span>Now</span>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-sand/20 to-cyan/20">
              <div className="absolute inset-y-0 right-1/2 w-1 rounded-full bg-cyan shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
            </div>
          </div>
          <p className="text-xs text-white/60">إعادة تخيل رقمية لأغراض تعليمية/سياحية.</p>
        </aside>
      </div>
    </main>
  );
}
