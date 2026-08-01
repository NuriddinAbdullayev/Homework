import Link from 'next/link';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Next.js TypeScript loyihasi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body style={{ margin: 0, fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* NAVBAR */}
        <header style={{ padding: '1rem 2rem', background: '#111', color: '#fff', display: 'flex', gap: '20px' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Bosh sahifa</Link>
          <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>Biz haqimizda</Link>
          <Link href="/posts" style={{ color: '#fff', textDecoration: 'none' }}>Postlar</Link>
        </header>

        {/* MAIN */}
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>

        {/* FOOTER */}
        <footer style={{ padding: '1rem', background: '#f1f1f1', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        </footer>

      </body>
    </html>
  );
}