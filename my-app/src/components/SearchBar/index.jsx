import { useEffect, useState } from "react";

function SearchBar(props) {
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
        console.log(results);
      });
  };
  const handleSearch = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
        className="text-black  rounded-lg p-2"
      />
      <div>Search results</div>
    </div>
  );
}
export default SearchBar;
