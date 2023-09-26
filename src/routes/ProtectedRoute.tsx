import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { getRole, getToken, Scope } from "./utils/token";

interface RouteProps extends PropsWithChildren {
  guard: () => boolean;
  redirect?: string;
}

export const isAuthenticatedGuard = () => {
  return !!getToken();
};

export const isAllowedRoleGuard = (allowedRoles: Scope[]) => {
  return allowedRoles.some((role) => role === getRole());
};

export function ProtectedRoute({ guard, children, redirect }: RouteProps) {
  if (guard()) {
    return <>{children}</>;
  }
  if (redirect) {
    return (
      <>
        <Navigate to={redirect} />
      </>
    );
  }
  return <>No permissions!</>;
}
