import Link from "next/link";
import { SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <SearchX className="mb-4 size-12 text-muted-foreground" />
      <h2 className="mb-2 text-xl font-semibold">Product not found</h2>
      <p className="mb-6 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
