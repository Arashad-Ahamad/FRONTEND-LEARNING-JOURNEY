import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1>Welcome to my home.</h1>
    <Link href ="/about">About</Link> <br />
    <Link href="/contact">Contact</Link><br />
    <Link href="/services">Services</Link><br />
    
    </>
  );
}
