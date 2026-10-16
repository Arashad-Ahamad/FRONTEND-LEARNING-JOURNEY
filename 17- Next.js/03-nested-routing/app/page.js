
import Link from "next/link";

export default function Home() {
  return (
   <>
    <h1>Home Page</h1>
    <Link href="/products">Products</Link> <br />
    <Link href="/about">About</Link> <br />
    <Link href="/contact">Contact Page</Link> 
    </>
  );
}
