import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Store</h1>
      <Link href="/products">View All Products →</Link>
    </div>
  );
}