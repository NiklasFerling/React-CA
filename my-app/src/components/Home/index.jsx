import ProductCard from "../ProductCard";

function Home() {
  return (
    <div className="h-screen px-20">
      <h1>Home</h1>
      <div className="flex flex-wrap text-cemter">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
export default Home;
