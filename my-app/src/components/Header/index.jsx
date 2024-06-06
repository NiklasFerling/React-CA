import { Link } from "react-router-dom";
import CartCountIcon from "../CartCountIcon";
import SearchBar from "../SearchBar";
import { useState } from "react";
import SearchResultsList from "../SearchResultsList";

function Nav() {
  const [results, setResults] = useState([]);

  return (
    <nav className="px-5 md:px-20 py-8 bg-green-500 text-white font-bold mb-10">
      <ul className="flex justify-between">
        <li className="md:text-2xl">
          <Link to="/">e.Com</Link>
        </li>
        <li className="relative w-1/2 md:w-1/3 xl:w-1/4">
          <SearchBar setResults={setResults} />
          <div onClick={() => setResults([])}>
            <SearchResultsList results={results} />
          </div>
        </li>
        <li className="md:text-2xl">
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
