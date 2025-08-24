import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    element: <Layout />, // gemensam layout med nav
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      // 404 fallback
      {
        path: "*",
        element: (
          <div>
            <h2>404</h2>
            <p>Sidan kunde inte hittas.</p>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
