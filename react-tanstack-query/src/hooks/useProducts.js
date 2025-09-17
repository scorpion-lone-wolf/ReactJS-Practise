import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../product.api";

const useProducts = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  return { error, isLoading, products };
};

export default useProducts;
