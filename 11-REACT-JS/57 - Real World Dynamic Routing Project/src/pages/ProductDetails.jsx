import { useParams } from "react-router-dom";
import { productList } from "../Data";

function ProductDetails() {

  const { id } = useParams();

  const product = productList.find(
    (item) => item.id === Number(id)
  );

  return (
    <div>

      <h2>Product Details</h2>

      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>

    </div>
  );
}

export default ProductDetails;