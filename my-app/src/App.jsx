import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import CheckoutSuccess from "./components/CheckoutSuccess";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="success" element={<CheckoutSuccess />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
