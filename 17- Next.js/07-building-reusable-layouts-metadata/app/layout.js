import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const metadata = {
  title: 'My Shop',
    description: "My online shopping website",

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        <main>{children}</main>
        <Footer/>

      </body>
    </html>
  );
}