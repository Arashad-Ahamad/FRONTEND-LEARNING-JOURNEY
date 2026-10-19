import Link from "next/link";

export default function NotFound() {
    return (
        <>
        <h1>404- Page not found</h1>
        <p>Sorry, this page is not available</p>
        <Link href="/">Back to Home</Link>
        </>
    )
}