import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 font-sans">
        <nav className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4">
            <a href="/" className="font-bold text-lg">الخدمة</a>
            <a href="/classes" className="hover:text-blue-600">الفصول</a>
            <a href="/students" className="hover:text-blue-600">المخدومين</a>
            <a href="/attendance" className="hover:text-blue-600">الحضور</a>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
