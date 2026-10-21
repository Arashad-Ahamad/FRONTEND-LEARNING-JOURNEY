import { products } from '@/app/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));

}


export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);


  if (!product) notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>

      <Link href='/products'>Back to Products</Link>
    </div>
  );
}