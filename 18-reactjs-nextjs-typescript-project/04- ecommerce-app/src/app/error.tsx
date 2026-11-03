"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

import ErrorComponent from "@/components/common/ErrorComponent";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const handleRetry = () => {
    // Re-fetch the server data, then re-render the segment
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  // In production Next.js hides server error details, so only show them in dev
  const message = process.env.NODE_ENV === "development" ? error.message : undefined;

  return <ErrorComponent message={message} onRetry={handleRetry} />;
}
