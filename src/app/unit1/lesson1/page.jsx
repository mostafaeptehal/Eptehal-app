import Link from 'next/link';
import Image from 'next/image'; // استيراد مكون الصور

export default function LessonOne() {
  const climateIssues = [
    { text: 'ارتفاع درجة الحرارة', icon: '🌡️' },
    { text: 'تلوث الهواء', icon: '☁️' },
    { text: 'ذوبان الجليد', icon: '🧊' },
    { text: 'الجفاف', icon: '🏜️' },
    { text: 'الفيضانات', icon: '🌊' }
  ];

  return (
    <article className="max-w-4xl mx-auto p-6 md:p-10 leading-relaxed" dir="rtl">
      {/* هيدر الدرس */}
      <div className="relative .bg-gradient-to-br from-pink-500 to-rose-400 text-white p-10 rounded-[2.5rem] mb-10 shadow-xl shadow-pink-100 overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
            الدرس الأول
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            الأنظمة الذكية وتأثيرها على <br/> التغيرات المناخية
          </h1>
        </div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="space-y-8">
        {/* قسم الهدف */}
        <section className="relative overflow-hidden bg-pink-50/50 p-8 rounded-3xl border border-pink-100">
          <div className="absolute top-0 right-0 w-2 h-full bg-pink-500"></div>
          <h2 className="text-xl font-bold text-pink-700 mb-3 flex items-center gap-2">
            <span>🎯</span> الهدف من الدرس:
          </h2>
          <p className="text-lg text-slate-700 font-medium">
            أن يستنتج الطالب تأثير الأنظمة الذكية المترابطة في مواجهة المشكلات البيئية.
          </p>
        </section>

        {/* قسم المحتوى الرئيسي مع الصورة */}
        <section className="bg-white p-8 .rounded-[2rem] shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">01</span>
            المشكلات المناخية الحالية
          </h2>

          {/* إضافة الصورة رقم 1 من مجلد public */}
          <div className="mb-8 rounded-3xl overflow-hidden shadow-lg border-4 border-pink-50">
            <Image 
              src="/1.jpeg" // تأكدي من امتداد الصورة (png أو jpg أو jpeg)
              alt="التغيرات المناخية"
              width={800}
              height={400}
              layout="responsive"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <p className="text-lg text-slate-600 mb-8 border-r-4 border-slate-200 pr-4 italic">
            يواجه كوكب الأرض اليوم مشاكل كبيرة بسبب التغيرات المناخية منها:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {climateIssues.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-pink-300 hover:bg-white transition-all group">
                <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                <span className="font-bold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl relative">
            <div className="absolute -top-4 right-8 bg-pink-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
              الحل الذكي
            </div>
            <p className="text-xl leading-relaxed">
              من خلال <span className="text-pink-400 font-black">"الأنظمة الذكية"</span> يمكن مراقبة البيئة، وتقليل التلوث، وحماية الكوكب.
            </p>
          </div>
        </section>

        {/* أزرار الانتقال */}
        <div className="flex justify-between items-center pt-10 border-t border-slate-100">
          <Link href="/unit1" className="text-slate-400 font-bold hover:text-pink-500 transition-colors text-sm md:text-base">
            ← العودة لقائمة الدروس
          </Link>
          
          <Link 
            href="/unit1/lesson2" 
            className="flex items-center gap-2 md:gap-3 bg-pink-500 text-white px-5 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100 group text-sm md:text-base"
          >
            الدرس التالي
            <span className="group-hover:-translate-x-2 transition-transform duration-300">⬅️</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
