'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import musicWords from '@/data/musicWords';

const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;

function getWordOfTheDay() {
  const startDate = new Date('2024-01-01T00:00:00');
  const today = new Date();
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const index = diffDays % musicWords.length;
  return musicWords[index].toUpperCase();
}

function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function MusicWordlePage() {
  const router = useRouter();
  const [wordOfTheDay, setWordOfTheDay] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [validWords, setValidWords] = useState<Set<string>>(new Set());
  const [showEndPopup, setShowEndPopup] = useState(false);

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay());

    if (!localStorage.getItem('musicWordleRulesShown')) {
      setShowRules(true);
      localStorage.setItem('musicWordleRulesShown', 'true');
    }

    fetch('/words.txt')
      .then(res => res.text())
      .then(text => {
        const words = text
          .split('\n')
          .map(w => w.trim().toLowerCase())
          .filter(w => w.length === WORD_LENGTH);
        setValidWords(new Set(words));
      });
  }, []);

  useEffect(() => {
    if (gameOver) {
      setShowEndPopup(true);
    }
  }, [gameOver]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameOver) return;
    const val = e.target.value.toUpperCase();
    if (/^[A-Z]{0,5}$/.test(val)) {
      setCurrentGuess(val);
    }
  };

  const handleSubmitGuess = () => {
    if (gameOver) return;
    if (currentGuess.length !== WORD_LENGTH) {
      setMessage(`Guess must be exactly ${WORD_LENGTH} letters.`);
      return;
    }
    if (!validWords.has(currentGuess.toLowerCase())) {
      setMessage('Not a valid English word.');
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');
    setMessage('');

    if (currentGuess === wordOfTheDay) {
      setMessage('🎉 Congratulations! You guessed it!');
      setGameOver(true);
    } else if (newGuesses.length >= MAX_ATTEMPTS) {
      setMessage(`Game over! The word was ${wordOfTheDay}.`);
      setGameOver(true);
    }
  };

  function getLetterStatus(letter: string, index: number, guess: string) {
    if (!wordOfTheDay) return 'absent';
    if (wordOfTheDay[index] === letter) return 'correct';
    if (wordOfTheDay.includes(letter)) return 'present';
    return 'absent';
  }

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

  const hoverStyle = {
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
      <h1 style={{ fontSize: '3rem', marginBottom: 10 }}>Music Wordle</h1>
      <p style={{ marginBottom: 20 }}>{formatDate(new Date())}</p>

      <div style={{ marginBottom: 20 }}>
        <button
          style={{ ...smallButtonStyle, marginRight: 10 }}
          {...hoverStyle}
          onClick={() => setShowRules(true)}
        >
          Show Rules
        </button>

        <button
          style={smallButtonStyle}
          {...hoverStyle}
          onClick={() => router.push('/entertainment')}
        >
          Back
        </button>
      </div>

      {showRules && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
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
            <p>Guess the 5-letter music-related word in 6 tries.</p>
            <ul>
              <li><strong>Green:</strong> Correct letter, correct spot</li>
              <li><strong>Yellow:</strong> In the word, wrong spot</li>
              <li><strong>Gray:</strong> Not in the word</li>
            </ul>
            <p>Only valid English 5-letter words are allowed as guesses.</p>
            <p>Click anywhere to close.</p>
          </div>
        </div>
      )}

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${MAX_ATTEMPTS}, 1fr)`,
          gridTemplateColumns: `repeat(${WORD_LENGTH}, 1fr)`,
          gap: 5,
          justifyContent: 'center',
          marginBottom: 20,
          maxWidth: WORD_LENGTH * 60,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {[...Array(MAX_ATTEMPTS)].map((_, rowIndex) => {
          const guess = guesses[rowIndex] || '';
          return [...Array(WORD_LENGTH)].map((_, colIndex) => {
            const letter = guess[colIndex] || '';
            const status = rowIndex < guesses.length ? getLetterStatus(letter, colIndex, guess) : '';
            let bgColor = '#333';
            if (status === 'correct') bgColor = '#6aaa64';
            else if (status === 'present') bgColor = '#c9b458';
            else if (status === 'absent' && letter) bgColor = '#555';

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 4,
                  border: '2px solid #555',
                  backgroundColor: bgColor,
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  userSelect: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {letter}
              </div>
            );
          });
        })}
      </div>

      {!gameOver && (
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            maxLength={WORD_LENGTH}
            value={currentGuess}
            onChange={handleInputChange}
            style={{
              fontSize: '2rem',
              textTransform: 'uppercase',
              width: 300,
              padding: '8px 10px',
              borderRadius: 6,
              border: '2px solid #ffd700',
              backgroundColor: 'black',
              color: '#ffd700',
              marginRight: 10,
              letterSpacing: '0.3em',
              fontWeight: '700',
              textAlign: 'center',
            }}
            autoFocus
          />
          <button
            onClick={handleSubmitGuess}
            style={smallButtonStyle}
            {...hoverStyle}
          >
            Guess
          </button>
        </div>
      )}

      {message && <p style={{ fontWeight: '600' }}>{message}</p>}

      {/* End Game Modal */}
      {showEndPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
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
            <h2 style={{ fontSize: '2rem', marginBottom: 20 }}>
              {guesses.includes(wordOfTheDay) ? '🎉 You Won!' : '😢 Game Over'}
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: 30 }}>
              The word was <strong>{wordOfTheDay}</strong>
            </p>
            <button
              style={{ ...smallButtonStyle, padding: '10px 20px', fontSize: '1.1rem' }}
              {...hoverStyle}
              onClick={() => setShowEndPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
