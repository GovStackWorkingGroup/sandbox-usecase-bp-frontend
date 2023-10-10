import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import Application from "../features/construction-permit/application/Application";
import Approved from "../features/construction-permit/application/approved/Approved";
import Feedback from "../features/construction-permit/application/feedback/Feedback";
import Identification from "../features/construction-permit/application/identification/Identification";
import Overview from "../features/construction-permit/application/overview/Overview";
import Parcel from "../features/construction-permit/application/parcel/Parcel";
import ApplicationSent from "../features/construction-permit/application/sent/Sent";
import ConstructionPermit from "../features/construction-permit/ConstructionPermit";
import ConstructionPermitApplication from "../features/construction-permit/ConstructionPermitApplication";
import FilesSent from "../features/documents/Sent";
import FileUpload from "../features/documents/Upload";
import FrontPage from "../features/front-page/FrontPage";
import Login from "../features/login/Login";
import { isAuthenticatedGuard, ProtectedRoute } from "./ProtectedRoute";
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
            path: "construction-permit/my-applications",
            element: <>Imagination</>,
          },
          {
            path: "construction-permit/application",
            element: (
              <ProtectedRoute guard={isAuthenticatedGuard}>
                <ConstructionPermitApplication />
              </ProtectedRoute>
            ),
            children: [
              {
                element: <Application />,
                children: [
                  { path: ":id", element: <Overview /> },
                  { path: ":id/parcel", element: <Parcel /> },
                  { path: ":id/identification", element: <Identification /> },
                  { path: ":id/documents", element: <FileUpload /> },
                  { path: ":id/documents/sent", element: <FilesSent /> },
                  { path: ":id/feedback", element: <Feedback /> },
                  { path: ":id/sent", element: <ApplicationSent /> },
                  { path: ":id/approved", element: <Approved /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
