import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Product from "./Product";
import ProductList from "./ProductList";

// save to local storage
function saveUserName(userName) {
  localStorage.setItem("user-name", userName);
}

function getUserName() {
  const userName = localStorage.getItem("user-name");
  return userName;
}

function removeUserName() {
  return localStorage.removeItem("user-name");
}

const router = createBrowserRouter([
  {
    Component: AppLayout,
    loader: () => {
      const userName = getUserName();
      return { userName: userName };
    },
    children: [
      {
        // this will be "/"
        index: true,
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
        loader: () => {
          const userName = getUserName();
          if (userName) {
            // ✅ redirect before component even renders
            return redirect("/product");
          }
          return null; // stay on login page
        },
        action: async ({ request }) => {
          let formData = await request.formData();
          let userName = formData.get("userName");
          saveUserName(userName);
          return userName;
        },
      },
      {
        path: "/logout",
        action: () => {
          removeUserName();
          return redirect("/");
        },
      },
      {
        path: "/product",
        children: [
          {
            // this will be "/product" list all product
            index: true,
            element: <ProductList />,
            loader: async () => {
              const userName = getUserName();
              if (!userName) {
                return redirect("/");
              }

              // gete data from api and load to ProductList component
              const res = await fetch("http://localhost:3000/products");
              const data = await res.json();
              return { products: data };
            },
          },
          {
            // list particular product
            path: ":productId",
            element: <Product />,
            loader: async ({ params: { productId } }) => {
              const userName = getUserName();
              if (!userName) {
                return redirect("/");
              }
              console.log(productId);
              const res = await fetch(`http://localhost:3000/products/${productId}`);
              const data = await res.json();
              return { product: data };
            },
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
