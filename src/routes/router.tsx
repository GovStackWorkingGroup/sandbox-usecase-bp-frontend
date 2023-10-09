import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import ApplicationSent from "../features/construction-permit-application/ApplicationSent";
import ConstructionPermitApplication from "../features/construction-permit-application/ConstructionPermitApplication";
import PermitApproved from "../features/construction-permit-application/PermitApproved";
import ConstructionPermit from "../features/construction-permit/ConstructionPermit";
import Feedback from "../features/feedback/Feedback";
import FeedbackSent from "../features/feedback/FeedbackSent";
import FrontPage from "../features/front-page/FrontPage";
import Login from "../features/login/Login";
import PaymentSuccessful from "../features/payment/PaymentSuccessful";
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
            path: "construction-permit/application",
            element: (
              <ProtectedRoute guard={isAuthenticatedGuard}>
                <ConstructionPermitApplication />
              </ProtectedRoute>
            ),
            children: [
              {
                path: "approved",
                element: <PermitApproved />,
              },
              {
                path: "payment",
                element: <PaymentSuccessful />,
              },
            ],
          },
          {
            path: "construction-permit/applicationSent",
            element: <ApplicationSent />,
          },
          {
            path: "construction-permit-approved",
            element: <PermitApproved />,
          },
        ],
      },
      {
        path: "/paymentSuccessful",
        element: <PaymentSuccessful />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/feedbackSent",
        element: <FeedbackSent />,
      },
    ],
  },
]);
