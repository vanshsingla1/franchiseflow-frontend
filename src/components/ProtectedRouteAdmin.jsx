import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteAdmin = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin === "true" || isAdmin === "1") {
    return <Outlet />;
  }

return <Navigate to="/dashboard" replace />;
};

export default ProtectedRouteAdmin;