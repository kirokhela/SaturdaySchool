'use client';

import Link from 'next/link';
import Button from './Button';

export default function Sidebar({ role, onClose }: { role: string | null; onClose?: () => void; }) {
  return (
    <aside className="fixed top-0 right-0 h-full w-72 bg-white p-6 z-50 shadow-lg overflow-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold">نظام إدارة الخدمة</h2>
          <p className="text-sm text-gray-500">لوحة التحكم</p>
        </div>
        <button aria-label="Close menu" onClick={onClose} className="text-gray-400 text-lg">✕</button>
      </div>

      <nav className="flex flex-col gap-3">
        <Link href="/home" className="py-2 px-3 rounded hover:bg-gray-50">🏠 الرئيسية</Link>
        <Link href="/classes" className="py-2 px-3 rounded hover:bg-gray-50">📚 الفصول</Link>
        <Link href="/students" className="py-2 px-3 rounded hover:bg-gray-50">🙋‍♂️ المخدومين</Link>
        <Link href="/attendance" className="py-2 px-3 rounded hover:bg-gray-50">✅ الحضور</Link>
        {role === 'admin' && <Link href="/users" className="py-2 px-3 rounded hover:bg-gray-50">👤 إدارة المستخدمين</Link>}
      </nav>

      <div className="mt-6">
        <Button variant="ghost" className="w-full" onClick={() => { localStorage.removeItem('user'); localStorage.removeItem('role'); window.location.href = '/'; }}>
          تسجيل الخروج
        </Button>
      </div>
    </aside>
  );
}
