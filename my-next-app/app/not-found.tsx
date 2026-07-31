import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 0' }}>
      <h1 style={{ fontSize: '3rem', margin: 0 }}>404</h1>
      <h2>Sahifa topilmadi</h2>
      <p>Siz qidirayotgan sahifa mavjud emas.</p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}