import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Product nahi mila!</p>
      <Link href="/">Home pe jao</Link>
    </div>
  );
}