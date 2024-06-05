import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product() {
  let { id } = useParams();
  const [data, loading, error] = useFetch(
    `https://v2.api.noroff.dev/online-shop/${id}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!loading && !error && data) {
    console.log(data);
  }
  return (
    <div className="min-h-screen">
      <div className="h-screen md:w-2/3 lg:w-1/2 m-auto flex flex-col sm:flex-row">
        <div className="flex-1 mr-4">
          <img src={data.image?.url} alt={data.image?.alt} className="w-full" />
        </div>
        <div className="flex-1 ml-4">
          <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
          {data.price === data.discountedPrice ? (
            <p className="mb-5 font-bold text-neutral-600 text-lg">
              kr {data.price}
            </p>
          ) : (
            <p className="text-red-500 font-bold text-lg mb-5">
              {data.discountedPrice}kr{" "}
              <span className="bg-red-50 border border-red-500 rounded-md px-2">
                -
                {Math.round(
                  ((data.price - data.discountedPrice) / data.price) * 100
                ).toFixed(0)}
                %
              </span>{" "}
              <span className="line-through text-neutral-600">
                {data.price}kr
              </span>
            </p>
          )}
          <p className="text-amber-500 mb-5">
            {data.rating} {""}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
            Add to cart
          </button>
          <h2 className="text-3xl mb-1">Item Description</h2>
          <p className="mb-3">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Product;
