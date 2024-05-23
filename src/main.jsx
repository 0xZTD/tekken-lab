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
  { path: "/", element: redirect("/tekken-lab") },
  {
    path: "/tekken-lab",
    element: <App />,
    children: [
      {
        path: "/tekken-lab",
        element: <MainContent />,
      },
      { path: "/tekken-lab/practice", element: <Practice /> },
      { path: "/tekken-lab/practice/routines", element: <h1>Routines</h1> },
      { path: "/tekken-lab/practice/library", element: <h1>Library</h1> },
      { path: "/tekken-lab/characters", element: <h1>Characters</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
