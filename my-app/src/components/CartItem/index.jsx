import { useContext } from "react";
import { CartContent } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartItem({ product }) {
  const { removeFromCart } = useContext(CartContent);

  return (
    <>
      <li key={product.id} className="flex mb-8">
        <Link
          to={`/product/${product.id}`}
          className="flex justify-left flex-1"
        >
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-40 h-40 object-cover mr-3"
          />
          <div>
            <h2 className="text-lg font-bold">{product.title}</h2>
            {product.price === product.discountedPrice ? (
              <p className="mb-5 font-bold text-neutral-600">
                kr {product.price}
              </p>
            ) : (
              <p className="text-red-500 font-bold mb-5">
                {product.discountedPrice}kr{" "}
                <span className="bg-red-50 border border-red-500 rounded-md px-2">
                  -
                  {Math.round(
                    ((product.price - product.discountedPrice) /
                      product.price) *
                      100
                  ).toFixed(0)}
                  %
                </span>{" "}
                <span className="line-through text-neutral-600">
                  {product.price}kr
                </span>
              </p>
            )}
          </div>
        </Link>
        <button
          onClick={() => removeFromCart(product)}
          className="bg-red-500 text-white px-4 py-2 h-10 w-10 rounded-full hover:bg-red-700 justify-center flex items-center"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
      <hr className="mb-8" />
    </>
  );
}
export default CartItem;
