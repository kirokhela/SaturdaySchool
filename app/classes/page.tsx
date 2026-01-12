import { neon } from '@neondatabase/serverless';

export default async function ClassesPage() {
  const sql = neon(process.env.DATABASE_URL!);
  const classes = await sql`
    SELECT class_id, class_name, gender
    FROM classes
    ORDER BY class_id DESC
  `;

  async function create(formData: FormData) {
    'use server';
    const sql = neon(process.env.DATABASE_URL!);
    const name = formData.get('class_name') as string;
    const gender = formData.get('gender') === 'male';

    await sql`
      INSERT INTO classes (class_name, gender)
      VALUES (${name}, ${gender})
    `;
  }

  async function remove(formData: FormData) {
    'use server';
    const sql = neon(process.env.DATABASE_URL!);
    await sql`DELETE FROM classes WHERE class_id = ${Number(formData.get('id'))}`;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">إدارة الفصول</h2>

      <form action={create} className="grid grid-cols-4 gap-2">
        <input
          name="class_name"
          placeholder="اسم الفصل"
          className="input"
        />

        <select name="gender" className="input">
          <option value="male">ذكور</option>
          <option value="female">إناث</option>
        </select>

        <button className="btn col-span-4">إضافة فصل</button>
      </form>

      <ul className="space-y-2">
        {classes.map((c: any) => (
          <li key={c.class_id} className="flex justify-between bg-white p-3 rounded shadow">
            <span>{c.class_name} — {c.gender ? 'ذكور' : 'إناث'}</span>
            <form action={remove}>
              <input type="hidden" name="id" value={c.class_id} />
              <button className="text-red-600">حذف</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
