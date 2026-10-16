import Link from "next/link";
import NotFound from "@/app/not-found";
import { getProductById } from "@/app/data/products";

export default async function ProductsPage({params}){
    const {id} = await params
    const product = getProductById(id)

    if(!product) {
        NotFound()
    }

    return (
    <div>
        <Link href="/">Back To Home</Link>
        <h1>{product.image}{product.name}</h1>
        <p>Price:{product.price}</p>
        <p>Product ID: {id}</p>
    
    </div>
    )
}