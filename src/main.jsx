import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AdminPage from "./pages/Admin";
import Hire from "./pages/Hire";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import Root from "./routes/root";

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "hire",
      element: <Hire />,
    },
    {
      path: "admin",
      element: <AdminPage />,
    },
    {
      path: "contacts/:contactId",
      element: <Contact />,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default Main;
