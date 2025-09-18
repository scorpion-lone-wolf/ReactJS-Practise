import Spinner from "../../ui/Spinner";
import useDelete from "./useDelete";

const ProductCard = ({ product }) => {
  const { isDeleting, deleteMutate } = useDelete();
  if (isDeleting) return <Spinner />;
  return (
    <div className="border rounded-xl shadow-md p-4 w-64 bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
      <p className="text-sm text-gray-500 mb-1">Price: ₹{product.price.toLocaleString()}</p>
      <p
        className={`text-sm font-medium mb-1 ${
          product.inStock ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      <div className="flex items-center gap-1 text-yellow-500">
        {"⭐".repeat(Math.floor(product.rating))}
        <span className="text-gray-600 text-sm">({product.rating})</span>
      </div>
      <button
        className="bg-black text-white rounded-4xl px-3.5 my-3"
        onClick={() => {
          deleteMutate({ id: product.id });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
