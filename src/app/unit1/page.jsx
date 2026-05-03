import Link from 'next/link';

export default function UnitOne() {
  const lessons = [
    { id: 1, title: "الأنظمة الذكية وتأثيرها على التغيرات المناخية", icon: "🌱" },
    { id: 2, title: "التهديدات السيبرانية المتقدمة", icon: "🛡️" },
    { id: 3, title: "البيانات الضخمة", icon: "📊" },
    { id: 4, title: "البيانات الضخمة وعلاقتها بالذكاء الاصطناعي", icon: "🤖" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12" dir="rtl">
      {/* عنوان الوحدة بتصميم عصري */}
      <div className="mb-12 relative p-8 bg-linear-to-l from-pink-50 to-transparent rounded-3xl border-r-8 border-pink-500">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-3">
          الوحدة الأولى: الذكاء الاصطناعي وحماية بياناتنا الرقمية
        </h2>
        <p className="text-pink-600 font-medium">استكشف دروس الوحدة وابدأ رحلة التعلم التفاعلية.</p>
      </div>

      {/* شبكة الدروس بتصميم بطاقات محسّن */}
      <div className="grid gap-6 md:grid-cols-2">
        {lessons.map((lesson) => (
          <Link 
            key={lesson.id} 
            href={`/unit1/lesson${lesson.id}`} 
            className="group relative flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-pink-100 border border-slate-100 transition-all duration-300 overflow-hidden"
          >
            {/* خلفية جمالية عند التمرير */}
            <div className="absolute inset-0 bg-pink-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-10"></div>
            
            {/* دائرة الرقم باللون البمبي */}
            <div className="w-14 h-14 bg-pink-500 text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-lg shadow-pink-200 ml-5 group-hover:rotate-6 transition-transform">
              {lesson.id}
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold text-pink-400 mb-1 uppercase tracking-widest">الدرس {lesson.id}</span>
              <span className="text-lg font-bold text-slate-700 group-hover:text-pink-700 transition-colors">
                {lesson.title}[cite: 2]
              </span>
            </div>

            {/* أيقونة تعبيرية لكل درس */}
            <div className="mr-auto text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all">
              {lesson.icon}
            </div>
          </Link>
        ))}
      </div>

      {/* تذييل بسيط للمساعدة */}
      <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
        <p className="text-slate-500">
          هل انتهيت من دراسة جميع الدروس؟ 
          <Link href="/exam" className="text-pink-600 font-bold mr-2 hover:underline">انتقل إلى الاختبار الآن!</Link>
        </p>
      </div>
    </div>
  );
}