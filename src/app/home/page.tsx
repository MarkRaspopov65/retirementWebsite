'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('loggedIn') !== 'true') {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('Failed to load images:', err));
  }, []);

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div
        style={{
          height: '100vh',
          backgroundColor: 'black',
          color: '#ffd700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
        }}
      >
        Loading...
      </div>
    );
  }

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
          Celebrating a Lifetime of Teaching Music
        </h1>

        <section
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '40px 30px',
            borderRadius: 12,
            fontSize: '1.8rem',
            fontWeight: '500',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
            maxWidth: 700,
            margin: '0 auto',
            color: '#ffd700',
          }}
        >
          <p>
            Hi Mr. Wriggs! I hope this website provides you with entertainment during your years
            of retirement, and reminds you of your time at UHS.
          </p>
        </section>
      </main>

      <div style={{ height: 100 }} />
      <hr style={{ borderColor: '#ffd700', opacity: 0.3, margin: '40px 0' }} />

      <section
        style={{
          padding: '60px 20px',
          background: 'rgba(0,0,0,0.15)',
          borderTop: '2px solid rgba(255, 215, 0, 0.3)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderRadius: 20,
          margin: '0 10px 40px',
          boxShadow: '0 0 30px 3px rgba(255, 215, 0, 0.4)',
          border: '2px solid #ffd700',
        }}
      >
        <h2
          style={{
            fontSize: '3rem',
            marginBottom: '40px',
            color: '#ffd700',
            textShadow: '0 0 6px rgba(255, 215, 0, 0.7)',
          }}
        >
          Gallery
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            flexWrap: 'nowrap',
            position: 'relative',
          }}
        >
          <button
            onClick={previousSlide}
            style={{
              fontSize: '3rem',
              background: 'none',
              border: 'none',
              color: '#ffd700',
              cursor: 'pointer',
              zIndex: 2,
              position: 'relative',
              userSelect: 'none',
            }}
            role="button"
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            style={{
              position: 'relative',
              width: 300,
              height: 200,
              flexShrink: 0,
            }}
          >
            <img
              src={`/gallery/${images[(currentIndex - 1 + images.length) % images.length]}`}
              alt="Previous"
              style={{
                position: 'absolute',
                left: '-160px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '150px',
                height: '100px',
                objectFit: 'cover',
                opacity: 0.3,
                borderRadius: 8,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              draggable={false}
            />
            <img
              src={`/gallery/${images[currentIndex]}`}
              alt="Current"
              style={{
                width: '300px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: 12,
                border: '3px solid #ffd700',
                boxShadow: '0 0 30px rgba(255, 215, 0, 0.7)',
                userSelect: 'none',
              }}
              draggable={false}
            />
            <img
              src={`/gallery/${images[(currentIndex + 1) % images.length]}`}
              alt="Next"
              style={{
                position: 'absolute',
                right: '-160px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '150px',
                height: '100px',
                objectFit: 'cover',
                opacity: 0.3,
                borderRadius: 8,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              draggable={false}
            />
          </div>

          <button
            onClick={nextSlide}
            style={{
              fontSize: '3rem',
              background: 'none',
              border: 'none',
              color: '#ffd700',
              cursor: 'pointer',
              zIndex: 2,
              position: 'relative',
              userSelect: 'none',
            }}
            role="button"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
}
