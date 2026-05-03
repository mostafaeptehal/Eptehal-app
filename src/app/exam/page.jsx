"use client";
import { useState } from "react";
import Link from 'next/link';

export default function ExamPage() {
  // 1. حالة الاختبار
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // 2. بنك الأسئلة (10 أسئلة)
  const questions = [
    {
      id: 1,
      question: "ما هي الوسيلة الأكثر شيوعاً لانتشار برامج الفدية؟",
      options: ["روابط البريد المشبوهة", "تحديثات النظام", "إغلاق الجهاز", "لوحة المفاتيح"],
      answer: "روابط البريد المشبوهة"
    },
    {
      id: 2,
      question: "تُعرف البيانات الضخمة بأنها بيانات معقدة لا يمكن معالجتها بـ:",
      options: ["التكنولوجيا التقليدية", "الذكاء الاصطناعي", "الإنترنت", "الحواسب الحديثة"],
      answer: "التكنولوجيا التقليدية"
    },
    {
      id: 3,
      question: "ما هو 'الوقود' الذي يحتاجه الذكاء الاصطناعي ليتعلم؟",
      options: ["البيانات الضخمة", "الطاقة الشمسية", "الأسلاك النحاسية", "سرعة المعالج"],
      answer: "البيانات الضخمة"
    },
    {
      id: 4,
      question: "الأنظمة الذكية تساهم في تقليل انبعاثات الكربون من خلال:",
      options: ["تحسين كفاءة الطاقة", "زيادة التصنيع", "إهمال البيئة", "حرق الوقود"],
      answer: "تحسين كفاءة الطاقة"
    },
    {
      id: 5,
      question: "أي مما يلي يعد من خصائص البيانات الضخمة؟",
      options: ["الحجم والسرعة", "البطء والتكرار", "صغر الحجم", "سهولة المسح"],
      answer: "الحجم والسرعة"
    },
    {
      id: 6,
      question: "برامج الفدية (Ransomware) تقوم بـ:",
      options: ["تشفير الملفات وطلب مال", "تسريع الجهاز", "تنظيف الفيروسات", "تغيير خلفية الشاشة"],
      answer: "تشفير الملفات وطلب مال"
    },
    {
      id: 7,
      question: "تساعد تقنيات الذكاء الاصطناعي في تحليل البيانات الضخمة لـ:",
      options: ["استخلاص القيمة منها", "حذفها نهائياً", "إبطاء النظام", "زيادة التكلفة"],
      answer: "استخلاص القيمة منها"
    },
    {
      id: 8,
      question: "العلاقة بين البيانات الضخمة والذكاء الاصطناعي هي علاقة:",
      options: ["تبادلية وتكاملية", "عكسية", "تنافسية", "لا توجد علاقة"],
      answer: "تبادلية وتكاملية"
    },
    {
      id: 9,
      question: "ما هو الهدف من استخدام الأنظمة الذكية في المناخ؟",
      options: ["مواجهة التغير المناخي", "زيادة التلوث", "تجاهل الطبيعة", "هدر الموارد"],
      answer: "مواجهة التغير المناخي"
    },
    {
      id: 10,
      question: "عند التعرض لهجوم سيبراني، يجب أولاً:",
      options: ["إبلاغ الجهات المختصة", "دفع الفدية فوراً", "تجاهل المشكلة", "نشر الخبر"],
      answer: "إبلاغ الجهات المختصة"
    }
  ];

  // 3. وظائف التحكم
  const handleOptionSelect = (option) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let finalScore = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setShowResult(true);
  };

  const resetExam = () => {
    setCurrentQuestion(0);
    setSelectedOptions({});
    setShowResult(false);
    setScore(0);
  };

  // 4. واجهة النتيجة النهائية
  if (showResult) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-md w-full border-4 border-pink-200">
          <div className="text-6xl mb-6">{score >= 7 ? "🎉" : "💪"}</div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">نتيجتك النهائية</h2>
          <div className="text-5xl font-black text-pink-500 mb-6">{score} / 10</div>
          <p className="text-slate-600 mb-8 font-medium">
            {score >= 7 ? "أحسنتِ يا بطلة! لقد اجتزتِ الوحدة بنجاح." : "محاولة جيدة، يمكنكِ مراجعة الدروس والمحاولة مرة أخرى."}
          </p>
          <div className="grid gap-4">
            <button onClick={resetExam} className="bg-pink-500 text-white py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg shadow-pink-100">
              إعادة المحاولة
            </button>
            <Link href="/unit1" className="bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all">
              العودة للدروس
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 5. واجهة الاختبار
  return (
    <div className="min-h-screen bg-[#fff5f7] py-10 px-4" dir="rtl">
      <div className="max-w-2xl mx-auto">
        
        {/* شريط التقدم العلوي */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-3">
            <div>
              <h1 className="text-2xl font-black text-slate-800">اختبار ابتهال الذكي</h1>
              <p className="text-pink-500 text-sm font-bold">الوحدة الأولى: التقنية والمستقبل</p>
            </div>
            <span className="text-pink-600 font-black text-xl">{currentQuestion + 1} / 10</span>
          </div>
          <div className="w-full bg-white h-3 rounded-full border border-pink-100 overflow-hidden">
            <div 
              className="bg-pink-500 h-full transition-all duration-500" 
              style={{ width: `${((currentQuestion + 1) / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* كرت السؤال */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-pink-100/50 border-b-8 border-pink-200 animate-in fade-in zoom-in duration-300">
          <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-8 leading-snug min-h-[60px]">
            {questions[currentQuestion].question}
          </h2>

          <div className="grid gap-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-right p-5 rounded-2xl border-2 transition-all font-bold flex items-center gap-4 group ${
                  selectedOptions[currentQuestion] === option 
                  ? 'border-pink-500 bg-pink-50 text-pink-700 shadow-md shadow-pink-100' 
                  : 'border-slate-50 bg-slate-50/50 hover:border-pink-200 hover:bg-white text-slate-600'
                }`}
              >
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  selectedOptions[currentQuestion] === option 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-slate-400 group-hover:bg-pink-100 group-hover:text-pink-500'
                }`}>
                  {index + 1}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* التحكم السفلي */}
        <div className="mt-10 flex justify-between items-center px-2">
          <button 
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className={`font-bold transition-colors ${currentQuestion === 0 ? 'text-slate-300' : 'text-slate-500 hover:text-pink-600'}`}
          >
            ← السؤال السابق
          </button>
          
          <button 
            onClick={handleNext}
            disabled={!selectedOptions[currentQuestion]}
            className={`px-12 py-4 rounded-2xl font-black transition-all shadow-xl ${
              !selectedOptions[currentQuestion] 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
              : 'bg-slate-900 text-white hover:bg-pink-600 shadow-pink-100'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'إنهاء وتسليم' : 'السؤال التالي ←'}
          </button>
        </div>

      </div>
    </div>
  );
}