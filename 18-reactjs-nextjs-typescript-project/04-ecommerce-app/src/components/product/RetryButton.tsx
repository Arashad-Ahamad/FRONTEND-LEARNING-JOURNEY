"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function RetryButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh(); // re-runs the server component → re-fetches
    });
  };

  return (
    <button
      onClick={handleRetry}
      disabled={isPending}
      className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isPending ? "Retrying…" : "Try Again"}
    </button>
  );
}