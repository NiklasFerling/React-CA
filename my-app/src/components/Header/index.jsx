import { Link } from "react-router-dom";
import CartCountIcon from "../CartCountIcon";

function Nav() {
  return (
    <nav className="px-20 py-8 bg-green-500 text-white font-bold mb-10">
      <ul className="flex justify-between">
        <li className="text-2xl">
          <Link to="/">e.Com</Link>
        </li>
        <li>
          <form action="">
            <input className="text-black px-2 py-1" name="text" />
          </form>
        </li>
        <li className="text-2xl">
          <Link to="/cart">
            <CartCountIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}
export default Header;
