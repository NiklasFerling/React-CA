import { createContext } from "react";
import { useState } from "react";

export const CartContent = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    setCart([...cart, product]);
  }
  function removeFromCart(product) {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  }
  return (
    <CartContent.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContent.Provider>
  );
};
