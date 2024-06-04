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
      <div className="flex flex-wrap text-cemter">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Home;
