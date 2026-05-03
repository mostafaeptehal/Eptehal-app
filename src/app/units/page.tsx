import Link from 'next/link';

export default function Units() {
  // بيانات الوحدة بناءً على تحليل المحتوى
  const units = [
    {
      id: 1,
      title: "الوحدة الأولى: الذكاء الاصطناعي وحماية بياناتنا الرقمية",
      description: "رحلة شاملة لاستكشاف الأنظمة الذكية، مواجهة التهديدات السيبرانية، وفهم قوة البيانات الضخمة.",
      lessonsCount: 4,
      color: "from-pink-500 to-rose-500", // تدرج لوني جذاب
      path: "/unit1"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16" dir="rtl">
      {/* رأس الصفحة بتصميم محسّن */}
      <header className="mb-16 relative">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-100 rounded-full blur-3xl opacity-60"></div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 border-r-8 border-pink-500 pr-6">
          المناهج الدراسية
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          اختر وحدتك الدراسية الآن وابدأ في تطوير مهاراتك الرقمية مع منصة ابتهال.
        </p>
      </header>

      {/* قائمة الوحدات */}
      <div className="grid gap-10">
        {units.map((unit) => (
          <div 
            key={unit.id} 
            className="group relative bg-white rounded-4xl border border-slate-100 p-2 hover:shadow-[0_20px_50px_rgba(244,114,182,0.15)] transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
              
              {/* أيقونة الوحدة بتصميم دائري متدرج */}
              <div className={`w-32 h-32 bg-linear-to-br ${unit.color} rounded-3xl flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-pink-200 shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300`}>
                {unit.id}
              </div>

              {/* تفاصيل الوحدة */}
              <div className="grow text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className="text-xs font-bold px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full ring-1 ring-pink-100 uppercase tracking-widest">
                    متاح حالياً
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-400 font-medium">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    {unit.lessonsCount} دروس تعليمية
                  </span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 group-hover:text-pink-600 transition-colors">
                  {unit.title}
                </h2>
                
                <p className="text-slate-600 leading-relaxed text-lg max-w-3xl">
                  {unit.description}
                </p>
              </div>

              {/* زر الانتقال بتصميم عصري */}
              <div className="shrink-0 w-full lg:w-auto">
                <Link 
                  href={unit.path}
                  className="inline-flex items-center justify-center w-full lg:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-pink-600 transition-all duration-300 shadow-lg active:scale-95"
                >
                  استعراض الدروس
                  <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* تأثير ضوئي عند التمرير */}
            <div className="absolute inset-0 bg-linear-to-l from-pink-50/50 to-transparent rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}

        {/* بطاقة الوحدات القادمة */}
        <div className="relative overflow-hidden border-2 border-dashed border-pink-100 rounded-4xl p-12 flex flex-col items-center justify-center bg-pink-50/20 group">
          <div className="text-pink-300 text-5xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
          <p className="text-pink-400 font-bold text-xl">وحدات دراسية إضافية قريباً</p>
          <p className="text-pink-300 text-sm mt-2 font-medium">نحن نعمل على تجهيز المزيد من المحتوى الذكي لك.</p>
        </div>
      </div>
    </div>
  );
}