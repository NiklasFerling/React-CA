import { useContext } from "react";
import { CartContent } from "../../context/CartContext";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const { cart } = useContext(CartContent);

  return (
    <div className="w-1/2 mx-auto mb-20 min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-8">Cart:</h1>
      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <span className="text-8xl text-neutral-500">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <p className="text-lg mt-4">Your cart is empty</p>
          <Link to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl mt-8">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="flex justify-between mb-8">
            <h2 className="text-2xl">Total:</h2>
            <p className="text-2xl">
              {cart.reduce((acc, item) => acc + item.discountedPrice, 0)} kr
            </p>
          </div>
          <Link
            to={"/success"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl"
          >
            Checkout
          </Link>
        </>
      )}
    </div>
  );
}
export default Cart;
