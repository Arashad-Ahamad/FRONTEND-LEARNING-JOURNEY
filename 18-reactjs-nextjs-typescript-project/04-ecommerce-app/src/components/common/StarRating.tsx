import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface StarRatingProps {
  rate: number;
  count?: number;
}

export default function StarRating({ rate, count }: StarRatingProps) {
  const filled = Math.round(rate);

  return (
    <div className="flex items-center gap-2">
      <div className="flex" role="img" aria-label={`Rated ${rate} out of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={cn(
              "size-5",
              i < filled ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/40",
            )}
          />
        ))}
      </div>
      <span className="text-muted-foreground">
        {rate}
        {count !== undefined ? ` (${count} reviews)` : ""}
      </span>
    </div>
  );
}
