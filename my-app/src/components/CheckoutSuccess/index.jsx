import { useEffect } from "react";
import { useContext } from "react";
import { CartContent } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  const { setCart } = useContext(CartContent);
  useEffect(() => {
    setCart([]);
  }, []);
  return (
    <div className="min-h-screen text-center mt-20">
      <span className="text-9xl text-green-500">
        <FontAwesomeIcon icon={faCircleCheck} />
      </span>
      <h1 className="mt-10 mb-10">Checkout Success!</h1>
      <span className="mt-20">
        <Link
          to={"/"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl"
        >
          Continue shopping
        </Link>
      </span>
    </div>
  );
}
export default CheckoutSuccess;
