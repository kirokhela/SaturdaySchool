export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-6">
      <h1 className="text-3xl font-bold">نظام إدارة الخدمة</h1>

      <div className="flex gap-4">
        <a href="/classes" className="btn">إنشاء فصل</a>
        <a href="/students" className="btn">إضافة مخدوم</a>
        <a href="/attendance" className="btn">الحضور</a>
      </div>
    </div>
  );
}
