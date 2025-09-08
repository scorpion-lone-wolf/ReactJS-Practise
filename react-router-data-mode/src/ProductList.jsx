import { Link, useLoaderData } from "react-router-dom";

const ProductList = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map(p => (
        <div key={p.id} className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-bold">{p.name}</h3>
          <p>₹{p.price}</p>
          <Link to={`/product/${p.id}`} className="text-purple-600 hover:underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
