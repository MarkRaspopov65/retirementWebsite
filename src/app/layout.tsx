'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'Daily', href: '/daily' },
  { label: 'Entertainment', href: '/entertainment' },
  { label: 'Tributes', href: '/tributes' },
  { label: 'Messages', href: '/messages' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNav = pathname !== '/login';

  const [celebrateHover, setCelebrateHover] = useState(false);
  const [celebrateClicked, setCelebrateClicked] = useState(false);

  const handleCelebrateClick = () => {
    if (celebrateClicked) return;
    setCelebrateClicked(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => setCelebrateClicked(false), 2000);
  };

  return (
    <html lang="en">
      <body style={{ height: '100%', backgroundColor: 'black', color: '#ffd700', margin: 0 }}>
        {showNav && (
          <>
            <nav
              style={{
                backgroundColor: '#000',
                padding: '12px 0', 
                borderBottom: '2px solid #ffd700',
                position: 'sticky',
                top: 0,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 30,
                  justifyContent: 'center', 
                  alignItems: 'center',
                  maxWidth: '900px',         
                  margin: '0 auto',          
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '0 800px',
                }}
              >
                {navItems.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`nav-link${isActive ? ' active' : ''}`}
                      style={{
                        position: 'relative',
                        color: isActive ? '#ffd700' : '#bfa94a',
                        fontWeight: isActive ? '700' : '500',
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        paddingBottom: 4,
                        userSelect: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {label}
                      <span className="underline" />
                    </Link>
                  );
                })}

                {/* Celebrate Button */}
                <button
                  onClick={handleCelebrateClick}
                  onMouseEnter={() => setCelebrateHover(true)}
                  onMouseLeave={() => setCelebrateHover(false)}
                  disabled={celebrateClicked}
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: celebrateHover || celebrateClicked ? '#000' : '#bfa94a',
                    backgroundColor: celebrateHover || celebrateClicked ? '#ffd700' : 'transparent',
                    border: '2px solid #ffd700',
                    borderRadius: 6,
                    padding: '6px 14px',
                    cursor: celebrateClicked ? 'not-allowed' : 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    whiteSpace: 'nowrap', // keep button text on one line
                  }}
                  aria-label="Celebrate button"
                >
                  Celebrate
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: 2,
                      width: '100%',
                      backgroundColor: '#ffd700',
                      borderRadius: 1,
                      transform:
                        celebrateHover || celebrateClicked ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>
              </div>
            </nav>

            <style>{`
              .nav-link {
                display: inline-block;
              }
              .nav-link .underline {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 2px;
                width: 100%;
                background-color: #ffd700;
                border-radius: 1px;
                transform: scaleX(0);
                transition: transform 0.3s ease;
                transform-origin: left;
              }
              .nav-link:hover {
                color: #ffd700 !important;
              }
              .nav-link:hover .underline {
                transform: scaleX(1);
              }
              .nav-link.active .underline {
                transform: scaleX(1);
              }
            `}</style>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
