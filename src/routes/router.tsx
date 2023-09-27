import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import ConstructionPermitApplication from "../features/construction-permit-application/ConstructionPermitApplication";
import ConstructionPermit from "../features/construction-permit/ConstructionPermit";
import FrontPage from "../features/front-page/FrontPage";
import Login from "../features/login/Login";
export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/housing",
        children: [
          {
            path: "construction-permit",
            element: <ConstructionPermit />,
          },
          {
            path: "construction-permit/application",
            element: <ConstructionPermitApplication />,
          },
        ],
      },
    ],
  },
]);
