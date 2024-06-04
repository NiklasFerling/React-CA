import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="px-20 py-8 bg-green-500 text-white font-bold mb-10">
      <ul className="flex justify-between">
        <li>
          <Link to="/">e.Com</Link>
        </li>
        <li>
          <form action="">
            <input className="text-black px-2 py-1" name="text" />
          </form>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
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
