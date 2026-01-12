export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white/95 p-6 rounded-xl shadow-md flex flex-col items-center gap-3">
        <div className="h-10 w-10 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-gray-700 font-semibold">جارٍ التحميل...</p>
      </div>
    </div>
  );
}
