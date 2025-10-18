import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import CaseDetails from "./pages/Portfolio/CaseDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "uslugi", element: <Services /> },
      { index: true, element: <Home /> },
      { path: "o-nas", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <CaseDetails /> },
      { path: "kontakt", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

