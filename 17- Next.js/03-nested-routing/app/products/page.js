import Link from "next/link";

export default function Products() {
    return (
        <>
        <h1>Products Page</h1>
        <Link href="/">Home Page</Link> <br />
        <Link href="/products/leptop">Leptop Page</Link> <br />
        <Link href="/products/mobile">Mobile Page</Link> <br />
         
        </>
    )
}