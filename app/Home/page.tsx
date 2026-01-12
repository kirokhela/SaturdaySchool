// File: app/home/page.tsx
'use client';

import pgImage from '../../public/bg.jpg';

export default function HomePage() {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0, 112, 243, 0.85)',
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s',
    minWidth: 140,
    textAlign: 'center',
    fontSize: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

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
        backgroundImage: `url(${pgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 20,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Semi-transparent overlay for better readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1
          style={{
            fontSize: 'clamp(24px, 5vw, 48px)',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 15,
            textShadow: '3px 3px 10px rgba(0,0,0,0.8)',
            lineHeight: 1.4,
          }}
        >
          كنيسة السيدة العذراء<br />
          مارمينا أثناسيوس الرسولي<br />
          مدينة نصر
        </h1>
        
        <p
          style={{
            fontSize: 'clamp(16px, 3vw, 22px)',
            color: '#fff',
            marginBottom: 40,
            textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            fontWeight: '500',
          }}
        >
          نظام إدارة الخدمة
        </p>

        <div style={buttonContainerStyle}>
          <a 
            href="/attendance" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 0.85)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            الحضور
          </a>
          <a 
            href="/students" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 0.85)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            إضافة مخدوم
          </a>
          <a 
            href="/classes" 
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 0.85)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            إنشاء فصل
          </a>
        </div>
      </div>
    </div>
  );
}