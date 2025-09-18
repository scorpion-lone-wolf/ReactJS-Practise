import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../service/productApi";

const useDelete = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteMutate, isPending: isDeleting } = useMutation({
    mutationFn: ({ id }) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return { deleteMutate, isDeleting };
};

export default useDelete;
