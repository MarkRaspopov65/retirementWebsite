'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const isAdmin = username === 'jeffwrigglesworth' && password === 'iloveretirement';
    const isUser = username === 'uhs2025' && password === 'aumusic2025';

    if (isAdmin || isUser) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('isAdmin', String(isAdmin));
      router.push('/home');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: '#ffd700',
        padding: 20,
        backgroundImage: 'radial-gradient(circle at center, #222 0%, #000 80%)',
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: '100%',
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: 8,
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
          padding: '30px 25px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 2,
            color: '#ffd700',
          }}
        >
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          style={{
            padding: '12px 16px',
            fontSize: '1.1rem',
            borderRadius: 6,
            border: '2px solid #ffd700',
            backgroundColor: 'black',
            color: '#ffd700',
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          style={{
            padding: '12px 16px',
            fontSize: '1.1rem',
            borderRadius: 6,
            border: '2px solid #ffd700',
            backgroundColor: 'black',
            color: '#ffd700',
          }}
        />

        {error && (
          <p style={{ color: '#ff4d4d', textAlign: 'center', fontWeight: '600' }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: '14px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: 'black',
            color: '#ffd700',
            borderRadius: 6,
            border: '2px solid #ffd700',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#ffd700';
            e.currentTarget.style.color = 'black';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'black';
            e.currentTarget.style.color = '#ffd700';
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
