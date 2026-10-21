
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

async function DashboardContent() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");

  return (
    <>
      <h1>Dashboard</h1>
      <p>User: {user?.value ?? "Guest"}</p>
      <Link href="/">Back to Home</Link>
    </>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<p>Loading dashboard...</p>}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
