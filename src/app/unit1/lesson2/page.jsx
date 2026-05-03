import Link from 'next/link';
import Image from 'next/image'; // ضفنا السطر ده هنا

export default function LessonTwo() {
  return (
    <article className="max-w-4xl mx-auto p-6 md:p-10 leading-relaxed" dir="rtl">
      <header className="mb-10">
        <span className="text-pink-500 font-bold tracking-widest uppercase text-sm">الوحدة الأولى: الدرس الثاني</span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">التهديدات السيبرانية المتقدمة</h1>
      </header>

      <div className="bg-linear-to-br from-slate-900 via-pink-950 to-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl border-b-4 border-pink-500">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/20 text-pink-400 animate-pulse">🚨</span>
            <h2 className="text-2xl md:text-3xl font-bold text-pink-400">برامج الفدية (Ransomware)</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl mb-8 border-r-4 border-pink-500">
            <p className="text-pink-100 text-lg md:text-xl italic">"تخيلوا أن شخصاً قفل منزلك وطلب مالاً لفتحه."</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/5">
              <h3 className="text-pink-400 font-bold mb-3">🔍 ما هي؟</h3>
              <p className="text-slate-300">برامج تشفر ملفاتك وتطلب فدية لاستعادتها.</p>
            </div>
            <div className="bg-pink-500/10 p-6 rounded-2xl border border-pink-500/20">
              <h3 className="text-pink-400 font-bold mb-3">⚙️ كيف تعمل؟</h3>
              <p className="text-slate-300">تنتشر عبر الإيميلات المشبوهة وتشفر البيانات فور دخولها.</p>
            </div>
          </div>

          {/* الصورة التوضيحية لبرامج الفدية */}
          <div className="rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
            <Image 
              src="/2.jpeg" 
              alt="Ransomware attack illustration" 
              width={800} 
              height={400} 
              layout="responsive"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-slate-100">
        <Link href="/unit1/lesson1" className="text-slate-400 font-bold hover:text-pink-500 flex items-center gap-2"><span>→</span> الدرس السابق</Link>
        <Link href="/unit1/lesson3" className="bg-pink-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-pink-600 shadow-lg">الدرس التالي ⬅️</Link>
      </div>
    </article>
  );
}