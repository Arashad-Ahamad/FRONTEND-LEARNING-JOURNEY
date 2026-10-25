
"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <h1>Something went seriously wrong!</h1>
        <p>The application could not be loaded.</p>

        <button onClick={() => reset()}>
          Try Again
        </button>
      </body>
    </html>
  );
}
