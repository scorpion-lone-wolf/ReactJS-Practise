export async function fetchProduct({ productId }) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!res.ok) {
    throw new Error("Unable to fetch products");
  }
  const data = await res.json();
  return data;
}

export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Unable to fetch products");
  }
  const data = await res.json();
  return data.products;
}

export async function updateProduct({ productId }) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "some Random title",
    }),
  });
  if (!res.ok) {
    throw new Error("Unable to update product");
  }
  return res.json();
}
