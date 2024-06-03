import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/1`}>
      <div className="product-card animate-pulse w-80 mx-2">
        <div className="bg-neutral-500 h-80 rounded-md"></div>
        <div className="flex justify-between">
          <div>
            <p>Product Title</p>
            <p>Reviews</p>
          </div>
          <p>Price</p>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
