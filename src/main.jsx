import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/style.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import MainContent from "@components/mainContent/mainContent.jsx";
import Practice from "@components/practicePage/practice.jsx";

const router = createBrowserRouter([
  { path: "/", element: redirect("/tekkenLab") },
  {
    path: "/tekkenLab",
    element: <App />,
    children: [
      {
        path: "/tekkenLab",
        element: <MainContent />,
      },
      { path: "/tekkenLab/practice", element: <Practice /> },
      { path: "/tekkenLab/characters", element: <h1>Characters</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
