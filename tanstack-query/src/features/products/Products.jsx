import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import ProductCard from "./ProductCard";
import useProducts from "./useProducts";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, limit: 10 });

  const page = +searchParams.get("page");
  const limit = +searchParams.get("limit");

  const { isPending, isError, error, products } = useProducts({ page, limit });

  function handleMove(value) {
    setSearchParams({ limit: limit, page: Math.max(1, page + value) });
  }

  if (isPending) return <Spinner />;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <div className="overflow-scroll grid grid-cols-2 gap-4 ">
        {products.map(ele => (
          <ProductCard product={ele} key={ele.id} />
        ))}
      </div>
      <button
        className="rounded-full py-1 px-5 bg-yellow-300 my-3.5 mx-2"
        onClick={() => handleMove(-1)}
      >
        Prev
      </button>

      <button
        className="rounded-full py-1 px-5 bg-yellow-300 my-3.5"
        onClick={() => {
          handleMove(1);
        }}
      >
        Next
      </button>
    </>
  );
};

export default Products;
