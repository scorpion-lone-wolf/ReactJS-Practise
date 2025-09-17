import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../product.api";

export const useProduct = ({ productId }) => {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct({ productId }),
  });

  return { isLoading, error, product };
};
