// File: app/layout.tsx
'use client';

import { useState } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 font-sans">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 right-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-lg"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {sidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
            lg:translate-x-0 lg:static lg:z-0
          `}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
              نظام إدارة الخدمة
            </h1>
            
            <nav className="space-y-2">
              <a
                href="/"
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                🏠 الرئيسية
              </a>
              <a
                href="/classes"
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                📚 الفصول
              </a>
              <a
                href="/students"
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                👥 المخدومين
              </a>
              <a
                href="/attendance"
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                ✅ الحضور
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:mr-64 min-h-screen">
          <main className="p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}