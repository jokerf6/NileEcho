import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';

const features = ['فرعون AI يجاوبك', 'ترجمة فورية للسياح', 'قبل/بعد في ثانية', 'تجربة سينمائية خفيفة وسريعة'];
const useCases = ['شركات سياحة', 'مدارس ومحتوى تعليمي', 'متاحف ومعارض'];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <section className="grid items-center gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <p className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs">Franco-Futurism V1</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">خلّي الحضارة تتكلم معاك.</h1>
            <p className="text-white/80">
              NileEcho AI بيحيي المواقع الأثرية رقميًا… و”فرعون AI” يجاوبك بالعامية أو الإنجليزي.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary">
                جرّب الفرعون دلوقتي
              </Link>
              <a href="#preview" className="btn-secondary">
                شوف قبل/بعد
              </a>
            </div>
          </div>
          <div className="nile-card space-y-4 p-5 lg:col-span-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <p className="text-sm text-cyan">👑 اسأل الفرعون</p>
            <div className="space-y-3">
              <div className="max-w-[80%] rounded-2xl border border-white/10 bg-gradient-to-r from-cyan/10 to-gold/10 p-3">
                أهلًا بك في الكرنك! تحب نبدأ بقصة الأعمدة؟
              </div>
              <div className="mr-auto max-w-[80%] rounded-2xl border border-white/10 bg-white/10 p-3">
                ورّيني شكله زمان مقارنة بدلوقتي.
              </div>
            </div>
            <div className="h-36 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-cyan/10 p-4">
              <p className="mb-2 text-xs text-white/70">Before / After Preview</p>
              <div className="relative h-20 overflow-hidden rounded-xl border border-white/10">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.08),transparent)]" />
                <div className="absolute inset-y-0 right-1/2 w-0.5 bg-cyan shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
              </div>
            </div>
          </div>
        </section>

        <section id="preview" className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature} className="nile-card p-5 transition hover:border-white/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]">
              <h3 className="text-lg font-semibold">{feature}</h3>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase} className="nile-card p-5 text-center text-white/90">
              {useCase}
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
