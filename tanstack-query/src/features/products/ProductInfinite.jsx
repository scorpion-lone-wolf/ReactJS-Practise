import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import ProductCard from "./ProductCard";
import useProductsInfinite from "./useProductsInfinite";

const ProductsInfinite = () => {
  const { data, isError, error, isFetchingNextPage, hasNextPage, fetchNextPage, isPending } =
    useProductsInfinite(10);
  useEffect(() => {
    function handleScroll() {
      if (!hasNextPage || isFetchingNextPage) return;

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      // If user scrolled near bottom (e.g. 100px left)
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchNextPage();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) return <Spinner />;
  if (isError) return <div>{error.message}</div>;
  console.log(data);
  // Flatten pages into a single array
  const products = data.pages.flatMap(page => page.data);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 overflow-y-auto">
        {products.map(ele => (
          <ProductCard product={ele} key={ele.id} />
        ))}
      </div>

      <div className="flex justify-center my-4">
        {hasNextPage ? (
          <button
            className="rounded-full py-1 px-5 bg-yellow-300"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        ) : (
          <span className="text-gray-500">No more products</span>
        )}
      </div>
    </>
  );
};

export default ProductsInfinite;
