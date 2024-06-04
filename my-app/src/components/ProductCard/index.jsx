import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
            <p className="text-sm text-neutral-700">
              {product.rating}
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
          <p>{product.price}kr</p>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
