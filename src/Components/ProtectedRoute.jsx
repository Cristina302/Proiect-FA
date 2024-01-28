import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const isAllowed = isAuthenticated;
  console.log("Is Authenticated:", isAuthenticated);
  if (!isAllowed) {
    console.log("Redirecting to:", props.redirectTo);
    return <Navigate to={props.redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;