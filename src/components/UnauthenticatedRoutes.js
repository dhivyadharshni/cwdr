import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks";

export const UnauthenticatedRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to={"/admin"} /> : <Outlet />;
};
