import { useParams } from "react-router-dom";
import { useProduct } from "./hooks/useProduct";
import useUpdateProduct from "./hooks/useUpdateProduct";

const Product = () => {
  const { productId } = useParams();

  const { isLoading, error, product } = useProduct({ productId });
  const { mutate, isUpdating } = useUpdateProduct({ productId });

  if (isLoading || isUpdating) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  function handleUpdateProduct() {
    mutate({ productId });
  }

  return (
    <div className="max-w-sm rounded-2xl shadow-md border p-4 bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <span
            className={`text-sm ${
              product.availabilityStatus === "In Stock" ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>
        <button
          className="mt-4 w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition"
          onClick={handleUpdateProduct}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Product;
