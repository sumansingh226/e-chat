//privateRoute.tsx

import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../userContext";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
