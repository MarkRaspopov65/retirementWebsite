'use client';
import { useEffect, useState } from 'react';
import dadJokes from '@/data/dadJokes';

function getJokeOfTheDay() {
  const startDate = new Date('2024-01-01T00:00:00');
  const today = new Date();
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const index = diffDays % dadJokes.length;
  return dadJokes[index];
}

function calculateRetirementDuration() {
  const retirementStart = new Date('2025-06-26T00:00:00');
  const now = new Date();

  if (now < retirementStart) {
    return { years: 0, months: 0, days: 0 };
  }

  let years = now.getFullYear() - retirementStart.getFullYear();
  let months = now.getMonth() - retirementStart.getMonth();
  let days = now.getDate() - retirementStart.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

export default function DailyPage() {
  const [joke, setJoke] = useState('');
  const [duration, setDuration] = useState(calculateRetirementDuration());

  useEffect(() => {
    setJoke(getJokeOfTheDay());
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDuration(calculateRetirementDuration());
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'black',
        backgroundImage: 'radial-gradient(circle at center, #222 0%, #000 80%)',
        color: '#ffd700',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 40,
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: 30, fontWeight: '700' }}>
        Daily Notes
      </h1>

      {/* Joke of the Day Section */}
      <h2 style={{ fontSize: '2.5rem', marginBottom: 15 }}>Joke of the Day</h2>
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '35px 30px',
          borderRadius: 12,
          boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)',
          maxWidth: 700,
          width: '100%',
          fontSize: '1.8rem',
          fontWeight: '500',
          lineHeight: 1.5,
          margin: '0 auto',
          marginBottom: 50,
        }}
      >
        {joke}
      </div>

      {/* Retirement Countdown Section */}
      <h2 style={{ fontSize: '2.5rem', marginBottom: 15 }}>Retirement Tracker</h2>
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '35px 30px',
          borderRadius: 12,
          boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)',
          maxWidth: 700,
          width: '100%',
          fontSize: '1.6rem',
          fontWeight: '500',
          lineHeight: 1.5,
          margin: '0 auto',
        }}
      >
        <p>
          {duration.years} {duration.years === 1 ? 'year' : 'years'}, {duration.months}{' '}
          {duration.months === 1 ? 'month' : 'months'}, and {duration.days}{' '}
          {duration.days === 1 ? 'day' : 'days'}
        </p>
      </div>
    </div>
  );
}
