import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../service/productApi";

const useProducts = ({ page, limit }) => {
  const {
    isPending,
    data: products,
    error,
    isError,
  } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => getAllProducts({ page, limit }),
    placeholderData: keepPreviousData, // if this is not given then when page changes again loading is seen
  });
  return { isPending, isError, error, products };
};

export default useProducts;
