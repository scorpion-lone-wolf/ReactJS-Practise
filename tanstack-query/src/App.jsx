import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./features/products/product";
import ProductsInfinite from "./features/products/ProductInfinite";
import Products from "./features/products/products";
import AppLayout from "./ui/AppLayout";

//  create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000, // make stale time as 5 sec
      // refetchInterval: 10 * 1000, // query will refetch every 10 second (default=false)
      //  staleTime: 5 * 1000, // cache is consider stale after 5 second when something trigger fetch/refetch (default=0)
      //  refetchOnReconnect: false, // if set to false , when network is lost and again comes back ,it will not fetch (default=true)
    },
  },
});
const App = () => {
  return (
    //  use queryClient in QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/products" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productsinf" element={<ProductsInfinite />} />
            <Route path="products/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
