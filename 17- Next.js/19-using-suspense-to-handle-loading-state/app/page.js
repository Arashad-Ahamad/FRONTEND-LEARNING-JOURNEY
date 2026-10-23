import Image from "next/image";
import Title from "./components/Title";
import { Suspense } from "react";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <h1>Home Page</h1>
    <Title/>
    
    <Suspense fallback={<p>Products load </p>}>
    <Products/>
    </Suspense>

    <Footer/>

   </div>
  );
}
