export const products = [
  { id: "1", name: "Laptop", price: 45000, image: "💻" },
  { id: "2", name: "Mobile", price: 20000, image: "📱" },
  { id: "3", name: "Shirt", price: 800, image: "👕" },
];

export function getProductById(id) {
    return products.find((p)=> p.id === id )

}