import { useState } from "react";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((response) => response.json())
      .then((json) => {
        const results = json.data.filter((product) => {
          return (
            value &&
            product &&
            product.title &&
            product.title.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  function handleSearch(value) {
    setInput(value);
    fetchData(value);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
        className="text-black  rounded-lg p-2 w-full"
      />
    </div>
  );
}
export default SearchBar;
