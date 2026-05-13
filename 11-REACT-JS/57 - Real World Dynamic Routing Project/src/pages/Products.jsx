import { Link } from "react-router-dom";
import { productList } from "../Data";

function Products() {
  return (
    <div>

      <h2>Products List</h2>

      {productList.map((item) => (
        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <Link to={`/product/${item.id}`}>
            View Details
          </Link>

        </div>
      ))}

    </div>
  );
}

export default Products;