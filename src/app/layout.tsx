'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <html lang="en">
      <body style={{ height: '100%', backgroundColor: 'black', color: '#ffd700', margin: 0 }}>
        {showNav && (
          <>
            <nav
              style={{
                backgroundColor: '#000',
                padding: '12px 30px',
                display: 'flex',
                gap: 30,
                justifyContent: 'center',
                borderBottom: '2px solid #ffd700',
                position: 'sticky',
                top: 0,
                zIndex: 10,
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
