'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('loggedIn') !== 'true') {
      router.push('/login');
    }
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        color: '#ffd700',
        overflowY: 'auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        padding: '120px 20px 60px',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <img
        src="/background.png"
        alt="Background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          filter: 'brightness(0.3) saturate(0.8)',
          zIndex: -1,
        }}
      />

      <main>
        <h1
          style={{
            fontSize: '5rem',
            fontWeight: '400',
            marginBottom: 40,
            color: '#ffd700',
            textShadow: 'none',
          }}
        >
          Celebrating a Lifetime of Music Teaching
        </h1>

        <section
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',  // translucent black for minimalism
            padding: '40px 30px',
            borderRadius: 12,
            fontSize: '1.8rem',
            fontWeight: '500',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)', // subtle gold glow
            maxWidth: 700,
            margin: '0 auto',
            color: '#ffd700',
          }}
        >
          <p>
            Hi Mr. Wriggs! I hope this website provides you with entertainment during your years of retirement, and reminds you of your years at UHS.
          </p>
        </section>
      </main>
    </div>
  );
}
