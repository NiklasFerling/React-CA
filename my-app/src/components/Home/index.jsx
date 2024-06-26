import ProductCard from "../ProductCard";
import useFetch from "../../hooks/useFetch";

function Home() {
  const [data, loading, error] = useFetch(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div className="min-h-screen px-20">
      <h1 className="text-4xl font-bold text-center mb-10">Products:</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Home;
