export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center" dir="rtl">
      {/* العنوان باللون البمبي الغامق */}
      <h1 className="text-4xl font-extrabold text-pink-700 mb-6 transition-colors">عن منصة ابتهال</h1>
      
      <p className="text-xl text-slate-600 leading-relaxed mb-12">
        نحن نهدف إلى تمكين الطلاب من فهم المستقبل من خلال تبسيط مفاهيم
        <span className="text-pink-600 font-bold mx-1"> الذكاء الاصطناعي </span> 
        والأمن السيبراني، وتوفير بيئة تعليمية تفاعلية تواكب رؤية 2030.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* بطاقة الرؤية */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-pink-200 transition-all">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="font-bold text-lg mb-2 text-pink-700">رؤيتنا</h3>
          <p className="text-sm text-slate-500">خلق جيل قادر على التعامل مع التكنولوجيا بذكاء وأمان.</p>
        </div>

        {/* بطاقة المهمة */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-pink-200 transition-all">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="font-bold text-lg mb-2 text-pink-700">مهمتنا</h3>
          <p className="text-sm text-slate-500">تقديم محتوى تعليمي رقمي تفاعلي عالي الجودة.</p>
        </div>

        {/* بطاقة القيم */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-pink-200 transition-all">
          <div className="text-3xl mb-4">🛡️</div>
          <h3 className="font-bold text-lg mb-2 text-pink-700">قيمنا</h3>
          <p className="text-sm text-slate-500">الابتكار، الخصوصية، والتميز في التعليم الرقمي.</p>
        </div>
      </div>
    </div>
  );
}