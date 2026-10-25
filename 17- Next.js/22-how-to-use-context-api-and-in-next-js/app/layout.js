import { NameProvider } from "./context/NameContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NameProvider>{children}</NameProvider>
      </body>
    </html>
  );
}