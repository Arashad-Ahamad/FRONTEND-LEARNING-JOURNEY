import Link from "next/link";

export default function About() {
    return (
        <>
        <h1>About Page</h1>
        <Link href="/">Home</Link> <br />
        <Link href="/contact">Contact</Link><br />
        <Link href="/services">Services</Link>

        </>
    )
}