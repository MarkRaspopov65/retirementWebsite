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
                  style={{
                    color: isActive ? '#ffd700' : '#bfa94a',
                    fontWeight: isActive ? '700' : '500',
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    borderBottom: isActive ? '2px solid #ffd700' : 'none',
                    paddingBottom: 4,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
        {children}
      </body>
    </html>
  );
}
