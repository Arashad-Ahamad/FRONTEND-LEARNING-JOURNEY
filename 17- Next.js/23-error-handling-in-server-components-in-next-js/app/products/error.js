
"use client";

export default function Error({ error, unstable_retry }) {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <button onClick={() => unstable_retry()}>Try Again</button>
    </div>
  );
}