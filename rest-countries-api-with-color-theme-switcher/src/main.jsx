import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./index.css";
import CountriesList from "./Components/CountriesList.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";
import CountryInfo from "./Components/CountryInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/countries/:countryId",
    element: <CountryInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
