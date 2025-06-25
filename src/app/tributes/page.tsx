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

const disciplineOrder = ['Winds', 'Strings', 'Voice', 'Piano'];

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
    message: 'Thank you Jeff for everything you have done for UHS and UHS Music! I am still in disbelief that you are retiring because these 10 years have flown by working by your side. Your compassion, dedication and kindness has radiated through all facets of the school community and we will be forever grateful. I will miss your presence, company and leadership, but mostly just how much fun and inspiring it has been working with you. Congratulations on your retirement, I hope that you will take some time to relax and then do everything you wanted to do while you were working. I know that your next chapter will be just as inspiring and I look forward to hearing all about it.',
    image: '/tributes/ho.jpg',
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
].sort((a, b) => {
  const lastNameA = a.name.split(' ').slice(-1)[0].toLowerCase();
  const lastNameB = b.name.split(' ').slice(-1)[0].toLowerCase();
  return lastNameA.localeCompare(lastNameB);
});

const alumni2025: Person[] = [
  {
    name: 'Eva Xie (AU Strings 2024)',
    role: 'Alumni',
    year: 2025,
    message: 'Dear Mr. Wriggs,\nThank you so much for dedicating so much time, energy, and passion for us and AU Music. I hope you know that we will never stop missing your dad jokes so please keep doing them wherever you go 🙂 wish you the best of luck and hope to see you around at future concerts!',
    image: '/tributes/eva.jpg',
  },
  {
    name: 'Charissa Vandikas (AU Piano 2015)',
    role: 'Alumni',
    year: 2025,
    message: `Happy retirement!!! Thank you for your many years of devotion and encouragement towards your students. Having your support all these years helped give me the confidence needed to go forward with music against the uncertainty of this career path. The Vandikas family will never forget everything you've done for my brothers and I over the past 17 years!`,
    image: '/tributes/charissa.jpg',
  },
  {
    name: 'Jacqueline Huang (AU Strings 2020)',
    role: 'Alumni',
    year: 2025,
    message: `Thank you Mr. Wriggs!!\nYou have been such a wonderful teacher and even though I was only there for 2 years I had so much fun getting to know you! You have such a strong and passionate heart for music and you care so deeply for your students! And thank you so much for believing in me and allowing me to join the AU program so late in my high school career and now every time I go back to Unionville I always have such sweet memories because of all the work you have put in with the other teachers to make our experience at school so inspiring! I will never forget where I started my career as a musician and that’s thanks to you and your faith in me! I wouldn’t be where I am today without your support and opportunities as a young aspiring musician!`,
    image: '/tributes/jacqueline.jpg'
  },
  {
    name: 'Jenise Pan (AU Piano 2023)',
    role: 'Alumni',
    year: 2025,
    message: `Dear Mr. Wriggs,\nThank you so much for all of your generosity, support, and enthusiasm over the years! You made AU Music truly unforgettable, and I can't begin to express how grateful I am to have had you as a music mentor. You made Musicianship way more fun, and it gave me a solid foundation for my studies at U of T. I also had a great time in Wind Ensemble (even if it was just a few months!) I wish you all the best in your retirement, you truly deserve it. Congratulations, and thank you again for everything`,
    image: '/tributes/jenise.jpg',
  },
  {
    name: 'Ian Fong (AU Strings 2024)',
    role: 'Alumni',
    year: 2025,
    message: `Hey Mr. Wriggs, thank you for everything you've done for AU and have a happy retirement!`,
    image: '/tributes/ian.png',
  },
  {
    name: 'Jerry Han (AU Winds 2024)',
    role: 'Alumni',
    year: 2025,
    message: 'Happy Retirement, hope we see each other again',
    image: '/tributes/jerry.jpg',
  },
  {
    name: 'Roland Lau (AU Winds 2024)',
    role: 'Alumni',
    year: 2025,
    message: `What’s up Wriggs my GOAT. Congrats on retiring. Have fun staying home or doing whatever it is retired people do (I don’t know I’m not retired). I don’t play the trumpet anymore but I’ll put in a few hours of practice in my head just for you.`,
    image: '/tributes/roland.png',
  },
  {
    name: 'Jane Zeng (AU Piano 2023)',
    role: 'Alumni',
    year: 2025,
    message: `Hi Mr. Wriggs! It’s still sinking into me that you’re really retiring. You always made UHS Music so much brighter, whether it was your passion for music education, your dad jokes, or even just telling us to smile and nod if we’re with you. Thank you for everything you’ve done for UHS music and being someone who taught me to be creative, even when I didn’t believe in myself. All the best for the future, and I’ll miss you so much!`,
    image: '/tributes/jane.jpg',
  },
  {
    name: 'Andrew Poon (AU Winds 2024)',
    role: 'Alumni',
    year: 2025,
    message: 'Dear Mr.Wriggs, Congratulations on your retirement! After four incredible years in your classroom, I wanted express my thanks for the passion, patience, and dedication you’ve poured into the art of music and teaching. These years have been an important part of my development as a musician and I thank you for being a major part of it. I wish you a joyful retirement!',
    image: '/tributes/andrewp.jpg',
  },
  {
    name: 'Aidan Wong (AU Winds 2023)',
    role: 'Alumni',
    year: 2025,
    message: `Hey Wriggs,\nCongrats on your escape - I mean retirement! Thanks for everything you have done. I truly wouldn’t be where u am today without your support. Hopefully you finally can find some time to kick your feet up! All the best!`,
    image: '/tributes/aidan.png',
  },

  // add more alumni here
].sort((a, b) => {
  const extractData = (person: Person) => {
    const match = person.name.match(/\(AU (\w+)? (\d{4})\)/);
    const discipline = match?.[1] ?? '';
    const year = parseInt(match?.[2] ?? '9999', 10);
    const lastName = person.name.split(' ')[person.name.split(' ').length - 2] || '';
    return { discipline, year, lastName };
  };

  const aData = extractData(a);
  const bData = extractData(b);

  if (aData.year !== bData.year) return aData.year - bData.year;

  const aDisIndex = disciplineOrder.indexOf(aData.discipline);
  const bDisIndex = disciplineOrder.indexOf(bData.discipline);
  if (aDisIndex !== bDisIndex) return aDisIndex - bDisIndex;

  return aData.lastName.toLowerCase().localeCompare(bData.lastName.toLowerCase());
});;

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
    message: `Hi Mr. Wriggs,\n  When you announced your retirement, I felt a mix of emotions. A part of me was genuinely heartbroken, but I was also grateful that I’m graduating the same year, and that saying goodbye wouldn’t feel so sudden since I’d be moving on too. You've been the most caring, understanding, forgiving, and patient teacher I've had. Have a great, well deserved retirement!`,
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
    name: 'Olivia Ye',
    role: 'Student',
    year: 2025,
    message: `Hi Mr. Wriggs,\nThank you so much for everything over the past four years. I honestly couldn’t have imagined high school without you. There was never a dull moment! You've always been so supportive of me, and somehow you always managed to put a smile on my face, even on the rough days.\nAlso, sorry for all my absences and lates over the years 😦\nWishing you all the best in this next chapter. Let’s definitely stay in touch, and hopefully we can meet again sometime in the future.\nEnjoy your retirement. I will miss you!`,
    image: '/tributes/olivia.jpg',
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
    name: 'Bryan Wang',
    role: 'Student',
    year: 2025,
    message: 'Hi Mr. Wriggs! Thank you so much for everything you’ve given to the Arts Unionville program over the years! We were an incredibly lucky bunch to be able to learn and laugh with you. I wish you a joyful and restful retirement—no one else deserves it more!',
    image: '/tributes/bryan.jpg',
    graduatingYear: 2025,
    discipline: 'Strings',
  },
  {
    name: 'Brandon Chan',
    role: 'Student',
    year: 2025,
    message: 'Dear Mr. Wriggs, thank you for maintaining the music department during my four years at Unionville High School. I appreciate all of the events that you made possible that will always remain a strong memory to me. Happy retirement!',
    image: '/tributes/brandon.jpg',
    graduatingYear: 2025,
    discipline: 'Strings',
  },
  {
    name: 'Holly Nye',
    role: 'Student',
    year: 2025,
    message: 'Thank you for everything Mr Wriggs, you teach with such kindness and caring, and always make everyone feel welcome and comfortable! 🙂',
    image: '/tributes/holly.jpg',
    graduatingYear: 2025,
    discipline: 'Strings',
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
    name: 'Zoey Chow',
    role: 'Student',
    year: 2025,
    message: 'Hi Mr.Wriggs! Thanks for an unforgettable 3 years. Have fun in retirement!',
    image: '/tributes/zoey.jpg',
    graduatingYear: 2026,
    discipline: 'Winds',
  },
  {
    name: 'Calvin Liu',
    role: 'Student',
    year: 2025,
    message: `It's been a crazy few years, especially with you as my teacher. You've molded me as a person, and seeing you every day putting your all in inspires me to do what I do. I hope to see you again sometime in the future!`,
    image: '/tributes/calvin.jpg',
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
    name: 'Jacob Zhou',
    role: 'Student',
    year: 2025,
    message: 'Thank you for your years of dedication and leadership in the music department. You’ve inspired so many of us to grow not just as musicians, but as people. Your passion, patience, and love for music will always be remembered.\nWishing you a happy and well-deserved retirement.',
    image: '/tributes/jacob.jpg',
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
    name: 'James Zhang',
    role: 'Student',
    year: 2025,
    message: 'Hi Wriggs, it is saddening to see you leave, and I am truly grateful for all that you have done for us. I will do my best to carry on your legacy and teach it to others. Thank you.',
    image: '/tributes/james.jpeg',
    graduatingYear: 2027,
    discipline: 'Winds',
  },
  {
    name: 'Lucas Guo',
    role: 'Student',
    year: 2025,
    message: 'Happy retirement Mr Wriggs! Hope you enjoy the cottage up there. Go leafs!',
    image: '/tributes/lucas.jpg',
    graduatingYear: 2027,
    discipline: 'Winds',
  },
  {
    name: 'Sandy Li',
    role: 'Student',
    year: 2025,
    message: `Hi Mr. Wriggs! \nThank you for making so many opportunities and memories possible for the music department! The au music program is one of the best things I’ve been able to be a part of and it’s thanks to your dedication! Happy retirement! (Sorry for running, screaming and engaging in other shenanigans in the music hall. I’ll try my best to restrain myself next year)`,
    image: '/tributes/sandy.jpg',
    graduatingYear: 2027,
    discipline: 'Strings',
  },
  {
    name: 'Cassidy Woo',
    role: 'Student',
    year: 2025,
    message: 'Dear mr Wriggs, thank you for all of your dedication and commitment to AU music all these years, hope music will be with you forever!',
    image: '/tributes/cassidy.jpg',
    graduatingYear: 2027,
    discipline: 'Strings',
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
  },
  {
    name: 'Robert Ren',
    role: 'Student',
    year: 2025,
    message: 'Hello Mr.Wriggs, thank you very much for bringing us all the joy and jokes. I hope you remember the time we spent working and having fun together. Goodbye!',
    image: '/tributes/robert.png',
    graduatingYear: 2028,
    discipline: 'Winds',
  },
  {
    name: 'Labelle Qin',
    role: 'Student',
    year: 2025,
    message: `Hi Mr Wriggs, my high school experience has been invaluable with you as one of my music teachers. I truly wouldn't have made the memories I did if it wasn't for you pushing us to constantly try new musical things. I will never forget all the things I take away from every rehearsal, conversation, and interaction we had together. No class is ever dull when you're in it, and I truly believe every kid deserves a music teacher like you - someone who advocates for their passion and recognizes the power that music can play in their lives. Congratulations on your retirement, you genuinely deserve it. Keep making music!`,
    image: '/tributes/labelle.jpg',
    graduatingYear: 2025,
    discipline: 'Piano',
  },
  {
    name: 'Harrison Vandikas',
    role: 'Student',
    year: 2025,
    message: `Dear Mr. Wriggs, Thank you for being the backbone of this program for so many years now, enjoy a well deserved retirement, we'll miss your dad jokes`,
    image: '/tributes/harrison.jpg',
    graduatingYear: 2026,
    discipline: 'Piano',
  },
  {
    name: 'Johnathan Zhu',
    role: 'Student',
    year: 2025,
    message: `Thank you Mr. Wriggs for all your contributions towards our school, wish you a wonderful and relaxing time during retirement. And lastly, thank you for dealing with all the chaos that I have caused during High school…`,
    image: '/tributes/johnathan.jpg',
    graduatingYear: 2026,
    discipline: 'Piano',
  },
  {
    name: 'Andreas Tsang',
    role: 'Student',
    year: 2025,
    message: `Hello Mr Wriggs, Congratulations on your retirement! Thank you so much for teaching me and the music department for so many years. We are deeply grateful for what you’ve done for us, and I’m sure many people look up to you for both your guidance and as a person who represents music and collaboration. UHS Music wouldn’t be what it is without you, and I look forward to seeing what the future holds. (Please come back and visit us we’re gonna miss you so much)`,
    image: '/tributes/andreas.jpg',
    graduatingYear: 2026,
    discipline: 'Piano',
  },
  {
    name: 'Sunnie Yip',
    role: 'Student',
    year: 2025,
    message: `Hi Mr. Wriggs, thank you for everything you’ve done for us and helping ensure our plans work out. I’ll miss all your funnie jokes and silly socks!`,
    image: '/tributes/sunnie.jpg',
    graduatingYear: 2026,
    discipline: 'Voice',
  },
  {
    name: 'Karen Kuang',
    role: 'Student',
    year: 2025,
    message: `Happy Retirement, Mr. Wriggs! 🎉\nThank you for all the wisdom, laughs, and dad jokes over the years. We’ll miss your energy, your stories, and that unmistakable Wriggs charm. Wishing you endless adventures, zero emails, and all the coffee your heart desires. Cheers to the legend! 🍾🎈`,
    image: '/tributes/karen.jpg',
    graduatingYear: 2025,
    discipline: 'Voice',
  },
  {
    name: 'Isaac Lo',
    role: 'Student',
    year: 2025,
    message: 'Hi Mr wriggs, thank you for being so hard working, passionate and kind! Have a lovely retirement!',
    image: '/tributes/isaac.jpg',
    graduatingYear: 2025,
    discipline: 'Voice',
  }
  // add more students here
];

const disciplines = ['Winds', 'Strings', 'Voice', 'Piano'];
const graduatingYears = [2025, 2026, 2027, 2028];

function groupByDisciplineYear(people: Person[]) {
  const groups: Record<string, Person[]> = {};
  for (const discipline of disciplines) {
    for (const year of graduatingYears) {
      const key = `${discipline}-${year}`;
      groups[key] = people
        .filter(
          (p) =>
            p.discipline?.toLowerCase() === discipline.toLowerCase() &&
            p.graduatingYear === year
        )
        .sort((a, b) => {
          const lastA = a.name.trim().split(' ').slice(-1)[0].toLowerCase();
          const lastB = b.name.trim().split(' ').slice(-1)[0].toLowerCase();
          return lastA.localeCompare(lastB);
        });
    }
  }
  return groups;
}


function TributesPage() {
  const studentsByGroup = groupByDisciplineYear(students2025);

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    teachers: false,
    alumni: false,
    students: false,
  });

  const [openNested, setOpenNested] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (key: string, isOpen: boolean) => {
    setOpenSections((prev) => ({ ...prev, [key]: isOpen }));
  };

  const toggleNested = (key: string, isOpen: boolean) => {
    setOpenNested((prev) => ({ ...prev, [key]: isOpen }));
  };

  const summaryBaseStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#ffd700',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none' as const,
    marginBottom: 12,
  };

  const clickTextStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffd700',
    marginTop: 4,
    fontFamily: "'Segoe UI', Tahoma, Verdana, Geneva, sans-serif",
  };

  const defaultAccordionStyle: React.CSSProperties = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)',
    padding: 16,
    marginBottom: 40,
    transition: 'all 0.2s ease-in-out',
  };

  const nestedAccordionStyle: React.CSSProperties = {
    ...defaultAccordionStyle,
    marginBottom: 20,
  };

  const hoverStyle: React.CSSProperties = {
    filter: 'brightness(1.15)',
    boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)',
  };

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

     {/* Teachers */}
      <div
        style={{
          ...defaultAccordionStyle,
        }}
        onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
        onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultAccordionStyle)}
      >
        {/* Header area is clickable */}
        <div
          onClick={() => toggleSection('teachers', !openSections.teachers)}
          style={{
            ...summaryBaseStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              transition: 'transform 0.4s ease',
              transform: openSections.teachers ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            ▶
          </div>
          <div>
            Teachers (As Of 2025)
            <div style={clickTextStyle}>
              {openSections.teachers ? 'Click to collapse' : 'Click to view'}
            </div>
          </div>
        </div>

        {/* Animated content expansion */}
        <div
          style={{
            opacity: openSections.teachers ? 1 : 0,
            height: openSections.teachers ? 'auto' : 0,
            overflow: openSections.teachers ? 'visible' : 'hidden',
            transition: 'opacity 0.4s ease',
          }}
        >
          {openSections.teachers && <Section title="" people={teachers2025} />}
        </div>
      </div>
      
     {/* Alumni */}
      <div
        style={{
          ...defaultAccordionStyle,
        }}
        onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
        onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultAccordionStyle)}
      >
        <div
          onClick={() => toggleSection('alumni', !openSections.alumni)}
          style={{
            ...summaryBaseStyle,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              transition: 'transform 0.4s ease',
              transform: openSections.alumni ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            ▶
          </div>
          <div>
            Alumni (As Of 2025)
            <div style={clickTextStyle}>
              {openSections.alumni ? 'Click to collapse' : 'Click to view'}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: openSections.alumni ? 16 : 0,
            opacity: openSections.alumni ? 1 : 0,
            height: openSections.alumni ? 'auto' : 0,
            overflow: openSections.alumni ? 'visible' : 'hidden',
            transition: 'opacity 0.4s ease',
          }}
        >
          {openSections.alumni && <Section title="" people={alumni2025} />}
        </div>
      </div>


      {/* Students */}
        <div
          style={{
            ...defaultAccordionStyle,
          }}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultAccordionStyle)}
        >
          <div
            onClick={() => toggleSection('students', !openSections.students)}
            style={{
              ...summaryBaseStyle,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                transition: 'transform 0.4s ease',
                transform: openSections.students ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              ▶
            </div>
            <div>
              Students (As Of 2025)
              <div style={clickTextStyle}>
                {openSections.students ? 'Click to collapse' : 'Click to view'}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: openSections.students ? 16 : 0,
              opacity: openSections.students ? 1 : 0,
              height: openSections.students ? 'auto' : 0,
              overflow: openSections.students ? 'visible' : 'hidden',
              transition: 'opacity 0.4s ease',
            }}
          >
            {openSections.students && (
              <>
                <h2
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: '600',
                    marginTop: 16,
                    marginBottom: 16,
                    borderBottom: '2px solid #ffd700',
                    paddingBottom: 6,
                  }}
                >
                  By Discipline & Year
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {disciplines.map((discipline) =>
                    graduatingYears.map((year) => {
                      const key = `${discipline}-${year}`;
                      const people = studentsByGroup[key];
                      if (!people || people.length === 0) return null;

                      return (
                        <div
                          key={key}
                          style={{
                            ...nestedAccordionStyle,
                          }}
                          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
                          onMouseOut={(e) => Object.assign(e.currentTarget.style, nestedAccordionStyle)}
                        >
                          <div
                            onClick={() => toggleNested(key, !openNested[key])}
                            style={{
                              fontSize: '1.5rem',
                              fontWeight: '700',
                              color: '#ffd700',
                              cursor: 'pointer',
                              userSelect: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              marginBottom: 12,
                            }}
                          >
                            <div
                              style={{
                                display: 'inline-block',
                                transition: 'transform 0.4s ease',
                                transform: openNested[key] ? 'rotate(90deg)' : 'rotate(0deg)',
                              }}
                            >
                              ▶
                            </div>
                            {discipline} (Graduating Class of ’{year.toString().slice(2)})
                            <div style={clickTextStyle}>
                              {openNested[key] ? 'Click to collapse' : 'Click to view'}
                            </div>
                          </div>

                          <div
                            style={{
                              opacity: openNested[key] ? 1 : 0,
                              height: openNested[key] ? 'auto' : 0,
                              overflow: openNested[key] ? 'visible' : 'hidden',
                              transition: 'opacity 0.4s ease',
                            }}
                          >
                            {openNested[key] && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {people.map(({ name, message, image }) => (
                                  <div
                                    key={name}
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
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </>
            )}
          </div>
        </div>

    </div>
  );
}

// Section component unchanged
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
              <p style={{ marginTop: 8, fontSize: '1.2rem', maxWidth: 600, whiteSpace: 'pre-line' }}>
                {message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TributesPage;
