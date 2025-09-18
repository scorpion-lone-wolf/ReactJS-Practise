import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchProducts({ pageParam = 1, limit = 10 }) {
  const res = await axios.get("http://localhost:5000/products", {
    params: { _page: pageParam, _limit: limit },
  });

  const total = +res.headers["x-total-count"];
  const totalPages = Math.ceil(total / limit);

  return {
    data: res.data,
    nextPage: pageParam < totalPages ? pageParam + 1 : undefined, // 👈 if next page exists
  };
}

export default function useProductsInfinite(limit = 10) {
  return useInfiniteQuery({
    queryKey: ["productsInfinite"],
    queryFn: ({ pageParam }) => fetchProducts({ pageParam, limit }),
    initialPageParam: 1, // first page
    getNextPageParam: lastPage => lastPage.nextPage, // 👈 tells query if we can load more
  });
}
