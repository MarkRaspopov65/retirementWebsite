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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Retirement Website</title>
      </head>
      <body style={{ height: '100%', backgroundColor: 'black', color: '#ffd700', margin: 0 }}>
        {showNav && (
          <>
            <nav
              style={{
                width: '100%',
                backgroundColor: '#000',
                padding: '12px 0',
                borderBottom: '2px solid #ffd700',
                position: 'sticky',
                top: 0,
                zIndex: 10,
              }}
            >
              {/* Centered container with max width and horizontal padding */}
              <div
                style={{
                  maxWidth: '900px',
                  margin: '0 auto',
                  padding: '0 16px',
                  boxSizing: 'border-box',
                  width: '100%',
                }}
              >
                {/* Flex container with centered items and wrapping */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
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
                          fontSize: '1.1rem',
                          textDecoration: 'none',
                          paddingBottom: 4,
                          userSelect: 'none',
                          cursor: 'pointer',
                          transition: 'color 0.3s ease',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {label}
                        <span className="underline" />
                      </Link>
                    );
                  })}

                  <button
                    onClick={handleCelebrateClick}
                    onMouseEnter={() => setCelebrateHover(true)}
                    onMouseLeave={() => setCelebrateHover(false)}
                    disabled={celebrateClicked}
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: celebrateHover || celebrateClicked ? '#000' : '#bfa94a',
                      backgroundColor:
                        celebrateHover || celebrateClicked ? '#ffd700' : 'transparent',
                      border: '2px solid #ffd700',
                      borderRadius: 6,
                      padding: '6px 14px',
                      cursor: celebrateClicked ? 'not-allowed' : 'pointer',
                      userSelect: 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      whiteSpace: 'nowrap',
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

              /* On very small screens, stack vertically */
              @media (max-width: 480px) {
                nav > div > div {
                  flex-direction: column;
                  gap: 12px;
                }
              }
            `}</style>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
