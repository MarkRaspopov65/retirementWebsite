'use client';

import React, { useState } from 'react';


type Person = {
  name: string;
  role: string;
  year: number;
  message: string;
  image: string;
  graduatingYear?: 2025 | 2026 | 2027 | 2028;
  discipline?: 'Piano' | 'Strings' | 'Voice' | 'Winds';
};


const teachers2025: Person[] = [
  {
    name: 'Larry Beckwith',
    role: 'Teacher',
    year: 2025,
    message: `Thank you, Jeff (Mr. Wriggs), for your amazing leadership of the UHS music department and for your support and friendship over the years. I am quite overwhelmed by what we all have been able to accomplish under your wonderful guidance and - perhaps more importantly - how much FUN we have had along the way. You're a very warm-hearted, humble and generous person and you have brought those qualities to the music department as core values, in addition to the exceptional musicianship, talent and creativity. Wishing you all the best in your retirement, though I'm sure you'll be as busy as ever.`,
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
    message:
      'Thank you for all the amazing memories Jeff! I will never forget our time co-teaching band classes—and all the wisdom you passed down along the way. One of my favourites: “This profession is a marathon, not a race.” (Still trying to pace myself!) You also constantly reminded me to keep breathing and to get enough sleep… which I definitely try to do—emphasis on try. Your advice has stuck with me, even if my sleep schedule hasn’t. Wishing you the most incredible, fulfilling, relaxing, and sleep-filled retirement—you’ve more than earned it! I will miss you dearly, my dear friend and mentor!',
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

const alumni2025: Person[] = [
  {
    name: 'Jane Doe',
    role: 'Alumni',
    year: 2025,
    message: 'Congratulations on your retirement! You made such a difference in our lives.',
    image: '/tributes/beckwith.jpg',
  },
  // add more alumni here
];

const students2025: Person[] = [
  {
    name: 'Ethan Javier Wong',
    role: 'Student',
    year: 2025,
    message: 'Congratulations Mr. Wriggs, on this big milestone. Thanks for all your contributions to the music community and for all the opportunities you have given students in music. I can’t wait to see what you accomplish next!!!',
    image: '/tributes/ethan.jpg',
    graduatingYear: 2025,
    discipline: 'Winds',
  },
  {
    name: 'Andrew Tsai',
    role: 'Student',
    year: 2025,
    message: 'Hi Mr. Wriggs, you are the most caring, understanding, forgiving, and patient teacher I know. Have a great, well deserved retirement!',
    image: '/tributes/andrew.jpg',
    graduatingYear: 2025,
    discipline: 'Winds',
  },
  {
    name: 'Stanly Zhuang',
    role: 'Student',
    year: 2025,
    message: 'Enjoy your retirement! Hope we see each other soon.',
    image: '/tributes/stanly.jpg',
    graduatingYear: 2025,
    discipline: 'Winds',
  },
  {
    name: 'Anatoli Kolluru',
    role: 'Student',
    year: 2025,
    message: 'Happy Retirement',
    image: '/tributes/anatoli.jpg',
    graduatingYear: 2025,
    discipline: 'Winds',
  },
  {
    name: 'Artin Mirshahi',
    role: 'Student',
    year: 2025,
    message: `Hello Mr. Wriggs,\nThank you for all you have done for me! You were one of the biggest sources of inspiration to me in music and you made me progress and show my true potential throughout these 3 years. Thank you for your patience in each rehearsal and thank you for your hard work into making the band sound better with each rehearsal. I'm going to miss you so much! I hope we can get to have in person meet-ups some time 🙂.\nThanks for everything,\nArtin Mirshahi`,
    image: '/tributes/artin.jpg',
    graduatingYear: 2025,
    discipline: 'Winds',
  },
  {
    name: 'Henry Tung',
    role: 'Student',
    year: 2025,
    message: 'Hi Mr. Wriggs! Words cannot describe how thankful I am for being able to experience numerous music ensembles under your baton. In grade 10, you greatly changed the trajectory of my high school career, and now I cannot imagine a life without music. I’m sure I don’t need to say it, as I know you will be successful wherever you go, but good luck in all of your future endeavours. Thank you also for still letting me into the classroom the numerous times I was late, I promise I won’t be like this in University.',
    image: '/tributes/henry.png',
    graduatingYear: 2025,
    discipline: 'Winds',
  },
  {
    name: 'Vienna Liu',
    role: 'Student',
    year: 2025,
    message: 'Thanks for being a dad to us all—both in your leadership and your jokes',
    image: '/tributes/vincent.jpg',
    graduatingYear: 2025,
    discipline: 'Winds',
  },
  {
    name: 'Cynthia Tan',
    role: 'Student',
    year: 2025,
    message: 'Hi Mr. Wriggs, Im so happy to have had the opportunity of having you as a conductor. Thank you for making musicianship so stress free and for putting so much effort into our courses and the events our program have every year. We’ll miss you deeply, please come visit!',
    image: '/tributes/cynthia.jpg',
    graduatingYear: 2026,
    discipline: 'Strings',
  },
  {
    name: 'Madelyn Ma',
    role: 'Student',
    year: 2025,
    message: 'Hi Mr.Wriggs! Thank you so much for being an incredible Head of music, teacher, and musician. I’ve honestly learnt so much from your mindsets, jokes, and musicianship classes. I hope you have a wonderful retirement and come visit us when you can!',
    image: '/tributes/madelyn.jpg',
    graduatingYear: 2026,
    discipline: 'Strings',
  },
  {
    name: 'Chloe Liao',
    role: 'Student',
    year: 2025,
    message: 'Dear Mr. Wriggs, Without your knowledge and passion for leading us, AU Music would not be where it is today. Thank you for dedicating your time and resources to ensuring we become the best versions of ourselves.',
    image: '/tributes/chloe.jpg',
    graduatingYear: 2026,
    discipline: 'Strings',
  },
  {
    name: 'Jayden Won',
    role: 'Student',
    year: 2025,
    message: 'Have a nice retirement, and may the volume of your dad jokes increase as the days go on.',
    image: '/tributes/jayden.png',
    graduatingYear: 2026,
    discipline: 'Strings',
  },
  {
    name: 'Maisie Yu',
    role: 'Student',
    year: 2025,
    message: 'Thank you for everything, Mr. Wriggs! I will always remember what you have taught me and forever treasure the classes we had together! I will miss you, Wriggs!',
    image: '/tributes/maisie.jpg',
    graduatingYear: 2026,
    discipline: 'Winds',
  },
  {
    name: 'Erika Merkley',
    role: 'Student',
    year: 2025,
    message: 'Thank you for turning these last 3 years into a musically journey! Enjoy your meeting-less retirement!',
    image: '/tributes/erika.jpg',
    graduatingYear: 2026, 
    discipline: 'Winds',
  },
  {
    name: 'Olson Liu',
    role: 'Student',
    year: 2025,
    message: `I'm very glad that I met you in Grade 9 and joined AU! Thanks for your kindness and advice, I learnt more music repitore and types of music, thus different ideas of how music means to the society and myself. Happy retirement!`,
    image: '/tributes/olson.png',
    graduatingYear: 2026,
    discipline: 'Winds',
  },
  {
    name: 'YC',
    role: 'Student',
    year: 2025,
    message: 'Thank you Mr wriggs for everything, I really appreciate everything you’ve done for not only me, but the entire music community.',
    image: '/tributes/YC.jpg',
    graduatingYear: 2026,
    discipline: 'Winds',
  },
  {
    name: 'Audrey Zhu',
    role: 'Student',
    year: 2025,
    message: 'THANK YOU SO MUCH FOR TEACHING ME, MR. WRIGGS! I have learnt a lot about music and performing and will continue applying that knowledge to all aspects of my life! I wish you all the best and an absolutely amazing retirement! Thank you again, and have a great summer!',
    image: '/tributes/audrey.jpg',
    graduatingYear: 2027,
    discipline: 'Winds',
  },
  {
    name: 'Karissa Koo',
    role: 'Student',
    year: 2025,
    message: 'Mr Wriggs, you are the kindest, most passionate teacher I’ve ever had! I hope I run into you again one day on a cruise ship or the Bahamas because that would mean we’ve both made it big',
    image: '/tributes/karissa.jpg',
    graduatingYear: 2027,
    discipline: 'Winds',
  },
  {
    name: 'Ivan Lin',
    role: 'Student',
    year: 2025,
    message: 'Hey there, Mr. Wriggs. It’s been such a fun semester finally being in AU. I genuinely wish I could’ve had more time with you as my teacher because I enjoyed the little time we spent together and you’ve been such a great role model to me. You’ve been such an inspiring leader, and I’m genuinely proud to say I was one of your percussionists. Your advice has not only helped me improve as a musician but also as a student, and I will miss your humour because it’s super funny. I hope you have a blissful retirement.',
    image: '/tributes/ivan.jpg',
    graduatingYear: 2027,
    discipline: 'Winds',
  },
  {
    name: 'Vanessa Chan',
    role: 'Student',
    year: 2025,
    message: `Dear Mr Wriggs,\nDespite only being your student for only 2 years, you might have been the highlight of my highschool life. Your sacrifices for your students mean so much to us and I'll never forget your passion and eagerness to teach and bring joy to everyone's experience in music. From now on, I will carry on your passion in my performances. If you ever come back to watch us perform, I hope you can see the same amount of passion you bring to us shine through future ensembles. Thank you for everything, and happy retirement!\nLove, Vanessa`,
    image: '/tributes/vanessa.jpg',
    graduatingYear: 2027,
    discipline: 'Winds',
  },
  {
    name: 'Katrina Wong',
    role: 'Student',
    year: 2025,
    message: 'Thank you wriggs for such an amazing year!! i learned a lot and had a lot of funn :DDDD enjoy the retirement:DD',
    image: '/tributes/katrina.jpg',
    graduatingYear: 2028,
    discipline: 'Winds',
  },
  {
    name: 'Angel Ma',
    role: 'Student',
    year: 2025,
    message: 'You are so cool and I’m so glad to have you for grade 9; have fun retiring, drink bubble tea not tea! Don’t forget us!!',
    image: '/tributes/angel.jpg',
    graduatingYear: 2028,
    discipline: 'Winds',
  },
  {
    name: 'Sonia Tang',
    role: 'Student',
    year: 2025,
    message: 'Thank you so much for everything you did this year; you made it such a memorable grade 9 year and I’ll always be grateful for that. Congrats on your retirement and come back to visit us and watch our concerts whenever you can!!',
    image: '/tributes/sonia.jpg',
    graduatingYear: 2028,
    discipline: 'Winds',
  },
  {
    name: 'Miah Tam',
    role: 'Student',
    year: 2025,
    message: 'I’ll miss you as my teacher! I hope you have an enjoyable retirement! Although I only got you as my teacher for one year, don’t forget about me!',
    image: '/tributes/miah.jpg',
    graduatingYear: 2028,
    discipline: 'Winds',
  },
  {
    name: 'Vinny Wen',
    role: 'Student',
    year: 2025,
    message: 'Thanks for this year and congrats on your retirement. You’ll still be the only teacher that knows about my fire incidents',
    image: '/tributes/vinny.jpg',
    graduatingYear: 2028,
    discipline: 'Winds',
  }
  // add more students here
];

const disciplines = ['Winds', 'Strings', 'Voice', 'Piano'];
const graduatingYears = [2025, 2026, 2027, 2028];

// Helper: group people by discipline and year
function groupByDisciplineYear(people: Person[]) {
  const groups: Record<string, Person[]> = {};
  for (const discipline of disciplines) {
    for (const year of graduatingYears) {
      const key = `${discipline}-${year}`;
      groups[key] = people.filter(
        (p) =>
          p.discipline?.toLowerCase() === discipline.toLowerCase() &&
          p.graduatingYear === year
      );
    }
  }
  return groups;
}

export default function TributesPage() {
  // Assume teachers and alumni have no discipline/year so we show them separately
  const teacherAlumni = [...teachers2025, ...alumni2025];
  const studentsByGroup = groupByDisciplineYear(students2025);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'black',
        backgroundImage: 'radial-gradient(circle at center, #222 0%, #000 80%)',
        color: '#ffd700',
        fontFamily: "'Segoe UI', Tahoma, Verdana, Geneva, sans-serif",
        padding: 20,
        overflowY: 'auto',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: 30,
          textAlign: 'center',
        }}
      >
        Tributes
      </h1>

      {/* Teachers Section */}
      <Section title="Teachers (As Of 2025)" people={teachers2025} />

      <div style={{ height: 40 }} />

      {/* Alumni Section */}
      <Section title="Alumni (As Of 2025)" people={alumni2025} />

      <div style={{ height: 60 }} />

      {/* Students Accordions */}
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: 24,
          borderBottom: '2px solid #ffd700',
          paddingBottom: 8,
        }}
      >
        Students (As Of 2025)
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {disciplines.map((discipline) =>
          graduatingYears.map((year) => {
            const key = `${discipline}-${year}`;
            const people = studentsByGroup[key];
            if (!people || people.length === 0) return null;

            return (
              <details
                key={key}
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: 12,
                  boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)',
                  padding: 16,
                }}
                open={year === 2025 && discipline === 'Winds'} // optionally open first by default
              >
                <summary
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffd700',
                    cursor: 'pointer',
                    outline: 'none',
                    userSelect: 'none',
                    marginBottom: 12,
                  }}
                >
                  {discipline} (Graduating Class of '{year.toString().slice(2)})
                </summary>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {people.map(({ name, message, image }, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        borderRadius: 12,
                        padding: 20,
                        gap: 20,
                        flexWrap: 'wrap',
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
                      <div style={{ flex: 1, minWidth: 250 }}>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: '1.5rem',
                            fontWeight: '700',
                          }}
                        >
                          {name}
                        </h3>
                        <p
                          style={{
                            marginTop: 8,
                            fontSize: '1.1rem',
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            );
          })
        )}
      </div>
    </div>
  );
}

function Section({ title, people }: { title: string; people: Person[] }) {
  if (people.length === 0) return null;

  return (
    <>
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: 24,
          borderBottom: '2px solid #ffd700',
          paddingBottom: 8,
        }}
      >
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
              flexWrap: 'wrap',
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
            <div style={{ flex: 1, minWidth: 250 }}>
              <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '700' }}>{name}</h3>
              <p
                style={{
                  marginTop: 8,
                  fontSize: '1.2rem',
                  maxWidth: 600,
                  whiteSpace: 'pre-line',
                }}
              >
                {message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
