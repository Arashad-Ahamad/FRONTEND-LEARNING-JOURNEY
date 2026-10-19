import Link from "next/link";

export function Navbar() {
    return (
        <header>
        <Link href="/">Home</Link> 
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        
        </header>
    )
}