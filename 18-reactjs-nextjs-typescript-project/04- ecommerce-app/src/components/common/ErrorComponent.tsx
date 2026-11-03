"use client";

import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ErrorComponentProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorComponent({ message, onRetry }: ErrorComponentProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <AlertCircle className="mb-4 size-12 text-destructive" />
      <h2 className="mb-2 text-xl font-semibold">Something went wrong!</h2>
      <p className="mb-6 text-muted-foreground">{message || "Failed to load data"}</p>
      {onRetry && (
        <Button size="lg" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
