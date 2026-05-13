import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max Plus",
      price: 8999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 12999,
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400"
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 6999,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400"
    },
    {
      id: 4,
      name: "New Balance 574",
      price: 5499,
      image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=400"
    },
    {
      id: 5,
      name: "Reebok Classic",
      price: 4999,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"
    },
    {
      id: 6,
      name: "Jordan Retro",
      price: 15999,
      image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=400"
    }
  ];

  return (
    <>
      <Header />
      <Hero />
      <section className="products-section">
        <h2 className="section-title">🔥 Featured Collection</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <CartDrawer />
    </>
  );
}

export default App;