import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Layout/HomeLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products/Products.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
