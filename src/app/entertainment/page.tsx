'use client';
import React from 'react';
import Link from 'next/link'; 

const games = [
  {
    name: 'Music Wordle',
    description: 'Guess the music-related word in 6 tries!',
    image: '/music-wordle.png',
    link: '/entertainment/games/music-wordle',
  },
  {
    name: 'Memory Cards',
    description:
      'Match pairs of music-themed cards to test your memory skills. Challenge yourself and improve your recall!',
    image: '/memory-cards.jpg',
    link: '/entertainment/games/memory-cards',
  },
];

export default function EntertainmentPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: 40,
        background: 'radial-gradient(circle at center, #222 0%, #000 80%)',
        color: '#ffd700',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          fontWeight: '700',
          marginBottom: 40,
          textAlign: 'center',
        }}
      >
        Entertainment
      </h1>

      <div
        style={{
          display: 'flex',
          gap: 30,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {games.map(({ name, description, image, link }) => (
          <div
            key={name}
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 12,
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.4)',
              width: 280,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 350,
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                width: '100%',
                height: 160,
                objectFit: 'cover',
                borderRadius: 8,
                marginBottom: 16,
              }}
            />
            <h2 style={{ marginBottom: 10 }}>{name}</h2>
            <p
              style={{
                fontSize: '1rem',
                marginBottom: 20,
                textAlign: 'center',
                flexGrow: 1,
                width: '100%',
              }}
            >
              {description}
            </p>
            <Link
              href={link}
              style={{
                padding: '10px 20px',
                backgroundColor: '#000',
                color: '#ffd700',
                borderRadius: 6,
                fontWeight: '700',
                textDecoration: 'none',
                cursor: 'pointer',
                border: '2px solid #ffd700',
                alignSelf: 'stretch',
                textAlign: 'center',
                transition: 'all 0.2s ease-in-out',
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#ffd700';
                el.style.color = '#000';
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = '#000';
                el.style.color = '#ffd700';
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#333';
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#000';
              }}
            >
              Play
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
