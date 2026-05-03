import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-right" dir="rtl">
      {/* العنوان باللون البمبي الغامق لضمان الوضوح */}
      <h1 className="text-5xl font-bold text-pink-700 mb-4 tracking-tight">منصة "ابتهال" التعليمية</h1>
      
      <p className="text-xl text-slate-600 mb-8 font-medium">
        مستقبلك يبدأ هنا مع تعلم الأنظمة الذكية والذكاء الاصطناعي
      </p>

      <div className="flex gap-4">
        {/* زر البداية باللون البمبي الأساسي */}
        <Link 
          href="/units" 
          className="bg-pink-500 text-white px-8 py-3 rounded-xl hover:bg-pink-600 transition-all font-bold shadow-lg shadow-pink-100"
        >
          ابدأ رحلتك التعليمية
        </Link>

        {/* زر "لمحة عنا" بحدود وردية */}
        <Link 
          href="/about" 
          className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-xl hover:bg-pink-50 transition-all font-bold"
        >
          لمحة عنا
        </Link>
        
        {/* إضافة زر الاختبار ليكون متاحاً من الرئيسية أيضاً كما طلبنا سابقاً */}
        <Link 
          href="/exam" 
          className="bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-pink-700 transition-all font-bold shadow-lg"
        >
          الاختبارات
        </Link>
      </div>
    </main>
  );
}