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
            Hi Mr. Wriggs! I hope this website provides you with entertainment during your years of
            retirement, and reminds you of your time at UHS.
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
            gap: 16,
            flexWrap: 'nowrap',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={previousSlide}
            style={{
              fontSize: '2rem',
              background: 'none',
              border: 'none',
              color: '#ffd700',
              cursor: 'pointer',
              userSelect: 'none',
              zIndex: 2,
            }}
            aria-label="Previous"
          >
            ←
          </button>

          <div
            style={{
              position: 'relative',
              width: 250,
              height: 160,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={`/gallery/${images[(currentIndex - 1 + images.length) % images.length]}`}
              alt="Previous"
              style={{
                position: 'absolute',
                left: '-130px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '110px',
                height: '72px',
                objectFit: 'cover',
                opacity: 0.3,
                borderRadius: 8,
                pointerEvents: 'none',
                userSelect: 'none',
                boxShadow: '0 0 8px rgba(255, 215, 0, 0.2)',
              }}
              loading="lazy"
              draggable={false}
            />

            <div
              style={{
                border: '3px solid #ffd700',
                borderRadius: 12,
                boxShadow: '0 0 24px rgba(255, 215, 0, 0.7)',
                padding: 4,
                backgroundColor: 'black',
                width: 250,
                height: 160,
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={`/gallery/${images[currentIndex]}`}
                alt="Current"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 8,
                  display: 'block',
                }}
                draggable={false}
              />
            </div>

            <img
              src={`/gallery/${images[(currentIndex + 1) % images.length]}`}
              alt="Next"
              style={{
                position: 'absolute',
                right: '-130px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '110px',
                height: '72px',
                objectFit: 'cover',
                opacity: 0.3,
                borderRadius: 8,
                pointerEvents: 'none',
                userSelect: 'none',
                boxShadow: '0 0 8px rgba(255, 215, 0, 0.2)',
              }}
              loading="lazy"
              draggable={false}
            />
          </div>

          <button
            onClick={nextSlide}
            style={{
              fontSize: '2rem',
              background: 'none',
              border: 'none',
              color: '#ffd700',
              cursor: 'pointer',
              userSelect: 'none',
              zIndex: 2,
            }}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          h1 {
            font-size: 2.4rem !important;
          }
          h2 {
            font-size: 1.6rem !important;
          }
          div[style*="width: 250px"] {
            width: 200px !important;
            height: 130px !important;
          }
          img[alt="Previous"], img[alt="Next"] {
            display: none !important;
          }
          button {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </div>
  );
}
