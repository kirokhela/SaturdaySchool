// File: app/page.tsx
'use client';

import { neon } from '@neondatabase/serverless';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import bgImage from '../public/bg.jpg';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    try {
      const sql = neon(`${process.env.DATABASE_URL}`);
      const users: { id: number; name: string; password: string }[] = await sql`
        SELECT * FROM users WHERE name = ${name} AND password = ${password}
      `;

      if (users.length > 0) {
        localStorage.setItem('user', JSON.stringify({ name: users[0].name }));
        router.push('/home'); // redirect to home page
      } else {
        setError('الإسم أو كلمة السر غير صحيحين');
      }
    } catch (err) {
      console.error(err);
      setError('حدث خطأ ما، حاول مرة أخرى');
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: "'Cairo', sans-serif",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 1,
        }}
      />

      {/* Login Box */}
      <div style={{
        ...styles.loginBox,
        position: 'relative',
        zIndex: 2,
      }}>
        <img src="/Church.jpg" alt="Logo" style={styles.logo} />
        <h3 style={{ marginBottom: 25, color: '#333', fontWeight: '700' }}>تسجيل الدخول</h3>

        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>الإيميل</label>
            <input
              type="text"
              placeholder="admin@gmail.com"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>كلمة السر</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>دخول</button>
          {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

// === Inline styles ===
const styles: { [key: string]: React.CSSProperties } = {
  loginBox: {
    background: 'white',
    width: '100%',
    maxWidth: 380,
    padding: '40px 35px',
    borderRadius: 20,
    boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
    textAlign: 'center',
  },
  logo: {
    display: 'block',
    margin: '0 auto 20px auto',
    width: 190,
    borderRadius: 12,
  },
  inputGroup: {
    textAlign: 'right',
    marginBottom: 20,
  },
  label: {
    display: 'block',
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '14px',
    borderRadius: 12,
    border: '1px solid #ddd',
    fontSize: 15,
    outline: 'none',
    transition: 'all 0.3s',
  },
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 12,
    border: 'none',
    background: 'linear-gradient(135deg, #4a90e2, #7b61ff)',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: 10,
    transition: 'all 0.3s',
  },
};