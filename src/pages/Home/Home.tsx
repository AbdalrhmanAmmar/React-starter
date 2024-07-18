import useFetchQuery from "../../hooks/useFetchQuery";

function Home() {
  const { data, isLoading, error } = useFetchQuery(
    ["products"],
    "https://dummyjson.com/products"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      {data?.products?.length ? (
        data.products.map(
          (product: { id: number; title: string; description: string }) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          )
        )
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}

export default Home;
