import { neon } from '@neondatabase/serverless';

export default async function StudentsPage() {
  const sql = neon(process.env.DATABASE_URL!);

  const students = await sql`
    SELECT s.student_id, s.first_name, s.second_name, s.gender, c.class_name
    FROM students s
    JOIN classes c ON c.class_id = s.class_id
    ORDER BY s.student_id DESC
  `;

  const classes = await sql`SELECT class_id, class_name FROM classes`;

  async function create(formData: FormData) {
    'use server';
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      INSERT INTO students (first_name, second_name, gender, class_id)
      VALUES (
        ${formData.get('first_name')},
        ${formData.get('second_name')},
        ${formData.get('gender') === 'male'},
        ${Number(formData.get('class_id'))}
      )
    `;
  }

  async function remove(formData: FormData) {
    'use server';
    const sql = neon(process.env.DATABASE_URL!);
    await sql`DELETE FROM students WHERE student_id = ${Number(formData.get('id'))}`;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">إدارة المخدومين</h2>

      <form action={create} className="grid grid-cols-4 gap-2">
        <input name="first_name" placeholder="الاسم الأول" className="input" />
        <input name="second_name" placeholder="الاسم الثاني" className="input" />

        <select name="gender" className="input">
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
        </select>

        <select name="class_id" className="input">
          {classes.map((c: any) => (
            <option key={c.class_id} value={c.class_id}>{c.class_name}</option>
          ))}
        </select>

        <button className="btn col-span-4">إضافة مخدوم</button>
      </form>

      <ul className="space-y-2">
        {students.map((s: any) => (
          <li key={s.student_id} className="flex justify-between bg-white p-3 rounded shadow">
            <span>{s.first_name} {s.second_name} — {s.class_name}</span>
            <form action={remove}>
              <input type="hidden" name="id" value={s.student_id} />
              <button className="text-red-600">حذف</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
