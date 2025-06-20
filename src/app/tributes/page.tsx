'use client';

import React from 'react';

type Person = {
  name: string;
  role: string;
  year: number;
  message: string;
  image: string;
};

const teachers2025: Person[] = [
  {
    name: 'Larry Beckwith',
    role: 'Teacher',
    year: 2025,
    message: 'Placeholder',
    image: '/tributes/beckwith.jpg',
  },

  {
    name: 'Maggie Ho',
    role: 'Teacher',
    year: 2025,
    message: 'Placeholder',
    image: '/tributes/beckwith.jpg',
  },

  {
    name: 'Niloufar Barazesh',
    role: 'Teacher',
    year: 2025,
    message: 'Thank you for all the amazing memories Jeff! I will never forget our time co-teaching band classes—and all the wisdom you passed down along the way. One of my favourites: “This profession is a marathon, not a race.” (Still trying to pace myself!) You also constantly reminded me to keep breathing and to get enough sleep… which I definitely try to do—emphasis on try. Your advice has stuck with me, even if my sleep schedule hasn’t. Wishing you the most incredible, fulfilling, relaxing, and sleep-filled retirement—you’ve more than earned it! I will miss you dearly, my dear friend and mentor!',
    image: '/tributes/barazesh.jpeg',
  },

  {
    name: 'Michelle Teh',
    role: 'Teacher',
    year: 2025,
    message: 'Fun times!',
    image: '/tributes/teh.jpg',
  },
  // add more teachers here
];

const students2025: Person[] = [
  {
    name: 'placeholder',
    role: 'Student',
    year: 2025,
    message: 'placeholder',
    image: '/tributes/beckwith.jpg',
  },
  
  // add more students here
];

export default function TributesPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'black',
        backgroundImage: 'radial-gradient(circle at center, #222 0%, #000 80%)',
        color: '#ffd700',
        fontFamily: "'Segoe UI', Tahoma, Verdana, Geneva, sans-serif",
        padding: 40,
        overflowY: 'auto',
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
        Tributes
      </h1>

      {/* Teachers Section */}
      <Section title="Teachers (2025)" people={teachers2025} />

      {/* Spacer */}
      <div style={{ height: 60 }} />

      {/* Students Section */}
      <Section title="Students (2025)" people={students2025} />
    </div>
  );
}

function Section({ title, people }: { title: string; people: Person[] }) {
  return (
    <>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: 24, borderBottom: '2px solid #ffd700', paddingBottom: 8 }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {people.map(({ name, message, image }, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 12,
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)',
              padding: 20,
              gap: 20,
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                width: 100,
                height: 100,
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid #ffd700',
                flexShrink: 0,
              }}
            />
            <div>
              <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '700' }}>{name}</h3>
              <p style={{ marginTop: 8, fontSize: '1.2rem', maxWidth: 600 }}>{message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
