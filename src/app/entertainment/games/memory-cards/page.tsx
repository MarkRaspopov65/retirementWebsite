'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Music words for pairs - each word appears twice
const musicWords = ['NOTE', 'REST', 'TONE', 'BASS', 'BEAT', 'CHORD'];

function shuffleArray<T>(array: T[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function MemoryCardsPage() {
  const router = useRouter();
  const [cards, setCards] = useState<string[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<Set<number>>(new Set());
  const [guessCount, setGuessCount] = useState(0);
  const [disableClick, setDisableClick] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(false);

  useEffect(() => {
    const doubledWords = [...musicWords, ...musicWords];
    const shuffled = shuffleArray(doubledWords);
    setCards(shuffled);
    setMatchedIndices(new Set());
    setFlippedIndices([]);
    setGuessCount(0);
    setDisableClick(false);
    setShowWinPopup(false);
  }, []);

  useEffect(() => {
    // When all cards matched, show win popup
    if (cards.length > 0 && matchedIndices.size === cards.length) {
      setShowWinPopup(true);
    }
  }, [matchedIndices, cards]);

  const handleCardClick = (index: number) => {
    if (disableClick) return;
    if (matchedIndices.has(index)) return;
    if (flippedIndices.includes(index)) return;
    if (flippedIndices.length === 2) return;

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setDisableClick(true);
      setGuessCount((prev) => prev + 1);

      const firstWord = cards[newFlipped[0]];
      const secondWord = cards[newFlipped[1]];

      if (firstWord === secondWord) {
        setTimeout(() => {
          setMatchedIndices((prev) => new Set(prev).add(newFlipped[0]).add(newFlipped[1]));
          setFlippedIndices([]);
          setDisableClick(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
          setDisableClick(false);
        }, 1500);
      }
    }
  };

  // Smaller grid: 3 columns (6 pairs total = 12 cards)
  const gridColumns = 3;

  // Button styles and hover handlers
  const smallButtonStyle: React.CSSProperties = {
    padding: '6px 12px',
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: '#000',
    color: '#ffd700',
    border: '2px solid #ffd700',
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  };

  const hoverHandlers = {
    onMouseOver: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = '#ffd700';
      e.currentTarget.style.color = '#000';
    },
    onMouseOut: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = '#000';
      e.currentTarget.style.color = '#ffd700';
    },
    onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = '#333';
    },
    onMouseUp: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = '#000';
    },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: 20,
        background: 'radial-gradient(circle at center, #222 0%, #000 80%)',
        color: '#ffd700',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: 10 }}>Music Memory Cards</h1>

      <div style={{ marginBottom: 20 }}>
        <button
          style={{ ...smallButtonStyle, marginRight: 10 }}
          {...hoverHandlers}
          onClick={() => setShowRules(true)}
        >
          Show Rules
        </button>

        <button
          style={smallButtonStyle}
          {...hoverHandlers}
          onClick={() => router.push('/entertainment')}
        >
          Back
        </button>
      </div>

      {showRules && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowRules(false)}
        >
          <div
            style={{
              maxWidth: 420,
              backgroundColor: '#000',
              padding: 25,
              borderRadius: 10,
              boxShadow: '0 0 15px #ffd700',
              textAlign: 'left',
              color: '#ffd700',
              cursor: 'pointer',
              border: '2px solid #ffd700',
            }}
          >
            <h2 style={{ marginBottom: 10 }}>How to Play</h2>
            <p>Match pairs of identical music-themed words to test your memory skills.</p>
            <ul>
              <li>Click two cards to flip them over.</li>
              <li>If the cards match, they remain visible.</li>
              <li>If they don&apos;t match, they flip back over.</li>
              <li>Try to match all pairs with as few guesses as possible!</li>
            </ul>
            <p>Click anywhere to close.</p>
          </div>
        </div>
      )}

      <p style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 20 }}>
        Number of guesses: <span style={{ color: '#fff' }}>{guessCount}</span>
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gap: 16,
          maxWidth: gridColumns * 180,
          margin: '0 auto 40px',
          userSelect: 'none',
        }}
      >
        {cards.map((word, index) => {
          const isFlipped = flippedIndices.includes(index);
          const isMatched = matchedIndices.has(index);

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              style={{
                width: 170,
                height: 100,
                backgroundColor: isMatched ? '#555' : isFlipped ? '#ffd700' : '#111',
                border: `4px solid ${isMatched ? '#777' : '#ffd700'}`,
                borderRadius: 16,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: isMatched ? 'default' : 'pointer',
                boxShadow: isFlipped
                  ? '0 0 16px #ffd700'
                  : '0 0 8px rgba(255, 215, 0, 0.4)',
                color: isFlipped || isMatched ? '#000' : '#ffd700',
                fontWeight: '800',
                fontSize: '1.8rem',
                userSelect: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {(isFlipped || isMatched) ? word : ''}
            </div>
          );
        })}
      </div>

      {/* WIN POPUP MODAL */}
      {showWinPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
          }}
        >
          <div
            style={{
              maxWidth: 400,
              backgroundColor: '#000',
              padding: 30,
              borderRadius: 10,
              boxShadow: '0 0 20px #ffd700',
              textAlign: 'center',
              color: '#ffd700',
              border: '3px solid #ffd700',
            }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: 20 }}>🎉 Congratulations! 🎉</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: 30 }}>
              You matched all cards in {guessCount} guesses!
            </p>
            <button
              style={{ ...smallButtonStyle, padding: '10px 20px', fontSize: '1.1rem' }}
              {...hoverHandlers}
              onClick={() => setShowWinPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}