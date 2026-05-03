import Link from 'next/link';
import Image from 'next/image'; // ضفنا الـ import عشان ما يحصلش error

export default function LessonFour() {
  return (
    <article className="max-w-4xl mx-auto p-6 md:p-10 leading-relaxed" dir="rtl">
      {/* هيدر الدرس - تصميم مموج وردي */}
      <div className="relative bg-linear-to-br from-pink-500 via-rose-500 to-pink-600 text-white p-10 rounded-[2.5rem] mb-10 shadow-xl shadow-pink-100 overflow-hidden">
        <div className="relative z-10 text-center md:text-right">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
            الدرس الرابع والاخير
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            البيانات الضخمة وعلاقتها <br/> بالذكاء الاصطناعي
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
          </svg>
        </div>
      </div>

      <div className="space-y-8">
        {/* قسم المفهوم - بطاقة بمبية ناعمة */}
        <section className="bg-pink-50/50 p-8 rounded-3xl border border-pink-100 shadow-sm relative overflow-hidden group">
          <div className="absolute -left-4 -top-4 text-8xl opacity-5 group-hover:scale-110 transition-transform">📊</div>
          <h2 className="text-xl font-black text-pink-700 mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-pink-500 rounded-full"></span>
            مفهوم البيانات الضخمة:
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed relative z-10">
            هي مجموعة من <span className="text-pink-600 font-bold">البيانات الضخمة المعقدة</span> التي لا يمكن معالجتها بكفاءة باستخدام التكنولوجيا التقليدية.
          </p>
        </section>

        {/* إضافة صورة توضح العلاقة التبادلية */}
        <div className="my-8 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
          <Image 
            src="/4.jpeg" // تأكد من وجود الصورة في public/4.jpeg
            alt="Big Data and AI Connection"
            width={850}
            height={450}
            layout="responsive"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* قسم العلاقة التبادلية - تصميم الشبكة الذكية */}
        <section className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center">🤖</span>
            العلاقة التبادلية
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 border-r-4 border-pink-200 pr-4">
            تلعب البيانات الضخمة دوراً حيوياً في فاعلية الذكاء الاصطناعي من خلال محورين:
          </p>

          <div className="grid gap-4">
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border-2 border-slate-50 hover:border-pink-200 hover:bg-pink-50/20 transition-all group">
              <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-pink-100 group-hover:rotate-12 transition-transform">١</div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">الوقود للتعلم</h3>
                <p className="text-slate-600">الذكاء الاصطناعي يحتاج إلى البيانات الضخمة ليعمل ويتعلم.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border-2 border-slate-50 hover:border-pink-200 hover:bg-pink-50/20 transition-all group">
              <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-pink-100 group-hover:rotate-12 transition-transform">٢</div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">المعالجة الذكية</h3>
                <p className="text-slate-600">تقنيات الذكاء الاصطناعي تساعد في معالجة وتحليل هذا الكم الهائل واستخلاص القيمة منها.</p>
              </div>
            </div>
          </div>
        </section>

        {/* أزرار التنقل - إنهاء الوحدة */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-100">
          <Link 
            href="/unit1/lesson3" 
            className="text-slate-400 font-bold hover:text-pink-500 transition-colors flex items-center gap-2"
          >
            <span>→</span> الدرس السابق: البيانات الضخمة
          </Link>
          
          <Link 
            href="/exam" 
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-pink-600 transition-all shadow-xl group"
          >
            لقد أنهيت الوحدة! انتقل للاختبار
            <span className="group-hover:scale-125 transition-transform">🏆</span>
          </Link>
        </div>
      </div>
    </article>
  );
}