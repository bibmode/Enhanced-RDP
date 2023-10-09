import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LayoutContextProvider from "./components/layout/LayoutContext";

// pages
import Home from "./pages/Home";
import Results from "./pages/Results";
import DynamicEpsilon from "./pages/DynamicEpsilon";
import CPUParallelism from "./pages/CPUParallelism";
import ClassicRDP from "./pages/ClassicRDP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/results",
    element: <Results />,
    errorElement: <Home />,
  },
  {
    path: "/dynamic-epsilon",
    element: <DynamicEpsilon />,
  },
  {
    path: "/cpu-parallelism",
    element: <CPUParallelism />,
  },
  {
    path: "/classic-rdp",
    element: <ClassicRDP />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ToastContainer />

    <LayoutContextProvider>
      <RouterProvider router={router} />
    </LayoutContextProvider>
  </React.StrictMode>
);
