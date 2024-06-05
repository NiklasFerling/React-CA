import { useEffect } from "react";
import { useContext } from "react";
import { CartContent } from "../../context/CartContext";

function CheckoutSuccess() {
  const { cart, setCart } = useContext(CartContent);
  useEffect(() => {
    setCart([]);
  }, []);
  return (
    <div>
      <h1>Checkout Success</h1>
    </div>
  );
}
export default CheckoutSuccess;
