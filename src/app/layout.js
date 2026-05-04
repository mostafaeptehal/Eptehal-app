import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-slate-50 text-slate-900 font-sans">
        {/* الهيدر (شريط التنقل) */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* شعار المنصة باللون الوردي */}
              <div className="w-8 h-8 bg-pink-500 rounded-lg shadow-pink-100 shadow-lg"></div>
              <span className="text-xl font-black tracking-tight text-pink-700">ابتهال</span>
            </div>
            
            {/* القائمة الرئيسية */}
            <div className="flex gap-6 md:gap-8 font-medium">
              <a href="/" className="hover:text-pink-600 transition-colors">الرئيسية</a>
              <a href="/about" className="hover:text-pink-600 transition-colors">لمحة عنا</a>
              <a href="/units" className="hover:text-pink-600 transition-colors">المناهج</a>
              <a href="/exam" className="hover:text-pink-600 transition-colors text-pink-600 font-bold border-b-2 border-pink-500">الاختبارات</a>
            </div>
          </div>
        </nav>

        {/* محتوى الصفحة الرئيسي */}
        <main className="min-h-[calc(100vh-64px-100px)]">
          {children}
        </main>

        {/* الفوتر (تذييل الصفحة) */}
        <footer className="bg-white border-t border-slate-200 py-8 text-center mt-20">
          <p className="text-slate-500 text-sm">جميع الحقوق محفوظة لمنصة نوعية التعليمية © 2026</p>
        </footer>
      </body>
    </html>
  );
}