import Link from 'next/link';
import Image from 'next/image';

export default function LessonThree() {
  return (
    <article className="max-w-4xl mx-auto p-6 md:p-10" dir="rtl">
      <div className="bg-linear-to-r from-pink-600 to-rose-500 text-white p-10 rounded-[2.5rem] shadow-2xl mb-12 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-pink-100 font-bold mb-2 text-sm uppercase">الوحدة الأولى: الدرس الثالث</p>
          <h1 className="text-4xl md:text-5xl font-black">البيانات الضخمة</h1>
        </div>
      </div>

      <div className="space-y-8">
        <section className="bg-white p-8 rounded-3xl border-r-8 border-pink-500 shadow-sm">
          <h2 className="text-xl font-bold text-pink-700 mb-2">🎯 الهدف من الدرس:</h2>
          <p className="text-xl text-slate-700 mr-9">أن يعرف الطالب مفهوم البيانات الضخمة.</p>
        </section>

        {/* صورة توضيحية للبيانات الضخمة */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-pink-100">
          <Image 
            src="/3.jpeg" // تأكد من وجود صورة بهذا الاسم في مجلد public
            alt="Big Data Concept"
            width={900}
            height={450}
            layout="responsive"
          />
        </div>

        <section className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center font-black text-xl">؟</div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800">ما هي البيانات الضخمة؟</h2>
          </div>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed p-6 bg-pink-50/30 rounded-2xl border-2 border-dashed border-pink-100">
            هي مجموعة من <span className="font-black text-pink-600 underline">البيانات المعقدة</span> التي لا يمكن معالجتها بالطرق التقليدية.
          </p>
        </section>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10">
          <Link href="/unit1/lesson2" className="text-slate-400 font-bold hover:text-pink-600"><span>→</span> الدرس السابق</Link>
          <Link href="/unit1/lesson4" className="bg-pink-500 text-white px-10 py-5 rounded-3xl font-black hover:bg-pink-600 shadow-xl">الدرس الرابع ⬅️</Link>
        </div>
      </div>
    </article>
  );
}