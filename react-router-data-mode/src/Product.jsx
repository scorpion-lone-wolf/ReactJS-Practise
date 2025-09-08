import { useLoaderData } from "react-router-dom";

function Product() {
  const { product } = useLoaderData();

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="mt-2 text-gray-600">Category: {product.category}</p>
      <p className="mt-2 font-semibold">Price: ₹{product.price}</p>
    </div>
  );
}

export default Product;
