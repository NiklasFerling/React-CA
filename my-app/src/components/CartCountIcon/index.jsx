import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContent } from "../../context/CartContext";

function CartCountIcon({ count }) {
  const { cart } = useContext(CartContent);
  console.log(cart.length);
  return (
    <div className="relative">
      <span>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      {cart.length > 0 ? (
        <p className="absolute top-0 right-0 bg-red-500 rounded-xl w-5 h-5 flex justify-center text-sm">
          {cart.length}
        </p>
      ) : null}
    </div>
  );
}
export default CartCountIcon;
