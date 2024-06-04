import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card w-80 mx-2 mb-8">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-80 h-80 object-cover rounded-lg"
        />
        <div className="flex justify-between">
          <div>
            <p>{product.title}</p>
            <p>{product.rating}</p>
          </div>
          <p>{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
