import { neon } from '@neondatabase/serverless';

export default async function AttendancePage() {
  const sql = neon(process.env.DATABASE_URL!);

  const today = new Date().toISOString().slice(0, 10);

  const students = await sql`
    SELECT student_id, first_name, second_name
    FROM students
  `;

  const day = await sql`
    INSERT INTO school_days (school_date)
    VALUES (${today})
    ON CONFLICT (school_date) DO UPDATE
    SET school_date = EXCLUDED.school_date
    RETURNING school_day_id
  `;

  const dayId = day[0].school_day_id;

  async function mark(formData: FormData) {
    'use server';
    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      INSERT INTO attendance (student_id, school_day_id, attended)
      VALUES (${Number(formData.get('student_id'))}, ${dayId}, ${formData.get('attended') === 'true'})
      ON CONFLICT (student_id, school_day_id)
      DO UPDATE SET attended = EXCLUDED.attended
    `;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">تسجيل الحضور</h2>

      <ul className="space-y-2">
        {students.map((s: any) => (
          <li key={s.student_id} className="flex justify-between bg-white p-3 rounded shadow">
            <span>{s.first_name} {s.second_name}</span>

            <form action={mark} className="flex gap-2">
              <input type="hidden" name="student_id" value={s.student_id} />
              <button name="attended" value="true" className="text-green-600">✔ حاضر</button>
              <button name="attended" value="false" className="text-red-600">✖ غائب</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
