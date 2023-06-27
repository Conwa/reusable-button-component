import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ButtonView from "./routes/ButtonView.jsx";
import Homepage from "./routes/Homapage.jsx";
import InputView from "./routes/InputView.jsx";
import WorkInProgress from "./routes/WorkInProgress.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "colors",
        element: <WorkInProgress />,
      },
      {
        path: "typography",
        element: <WorkInProgress />,
      },
      {
        path: "spaces",
        element: <WorkInProgress />,
      },
      {
        path: "buttons",
        element: <ButtonView />,
      },
      {
        path: "inputs",
        element: <InputView />,
      },
      {
        path: "grid",
        element: <WorkInProgress />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);
