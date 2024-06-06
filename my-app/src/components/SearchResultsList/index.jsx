import { Link } from "react-router-dom";

function SearchResultsList({ results }) {
  return (
    <ul className="bg-white text-black rounded-md absolute top-12 w-full max-h-80 overflow-y-scroll">
      {results.map((result) => {
        return (
          <Link to={`/product/${result.id}`} key={result.id}>
            <li className="p-2 hover:bg-neutral-200"> {result.title}</li>
          </Link>
        );
      })}
    </ul>
  );
}
export default SearchResultsList;
