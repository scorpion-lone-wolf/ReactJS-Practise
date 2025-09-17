import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../product.api";

const useUpdateProduct = ({ productId }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending: isUpdating } = useMutation({
    mutationKey: ["product", productId],
    mutationFn: ({ productId }) => updateProduct({ productId }),
    onSuccess: updatedData => {
      console.log("succes", updatedData);
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });

  return { mutate, isUpdating };
};

export default useUpdateProduct;
