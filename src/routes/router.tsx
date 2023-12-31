import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import Application from "../features/construction-permit/application/Application";
import Identification from "../features/construction-permit/application/identification/Identification";
import Overview from "../features/construction-permit/application/overview/Overview";
import Parcel from "../features/construction-permit/application/parcel/Parcel";
import ApplicationSent from "../features/construction-permit/application/sent/Sent";
import ApplicationList from "../features/construction-permit/applications/application-list/ApplicationList";
import Applications from "../features/construction-permit/applications/Applications";
import Approved from "../features/construction-permit/applications/review-application/approved/Approved";
import Feedback from "../features/construction-permit/applications/review-application/feedback/Feedback";
import BankPayment from "../features/construction-permit/applications/review-application/payment/bank-payment/BankPayment";
import PaymentOverview from "../features/construction-permit/applications/review-application/payment/Overview";
import Payment from "../features/construction-permit/applications/review-application/payment/Payment";
import ReviewApplication from "../features/construction-permit/applications/review-application/ReviewApplication";
import ScheduleInspection from "../features/construction-permit/applications/review-application/schedule-inspection/ScheduleInspection";
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
            element: (
              <ProtectedRoute guard={isAuthenticatedGuard} redirect="/login">
                <Applications />
              </ProtectedRoute>
            ),
            children: [
              { index: true, element: <ApplicationList /> },
              { path: "review/:id", element: <ReviewApplication /> },
              { path: "review/:id/feedback", element: <Feedback /> },
              { path: "review/:id/approved", element: <Approved /> },

              {
                path: "review/:id/payment",
                element: <Payment />,
                children: [
                  { index: true, element: <PaymentOverview /> },
                  { path: "bank-payment", element: <BankPayment /> },
                ],
              },
              {
                path: "review/:id/schedule-inspection",
                element: <ScheduleInspection />,
              },
            ],
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
                  { path: ":id/sent", element: <ApplicationSent /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
