import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Layout } from "./Layout.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <App /> },
        { path: "about", element: <>ABout</> },
        // другие маршруты
      ],
    },
    { path: "*", element: <>404</> }, // Обработка 404
  ],
  {
    basename: process.env.NODE_ENV === "production" ? "/gh-page/" : "/", // Укажите название репозитория
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
