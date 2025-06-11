import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";

const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth();
  return authToken ? children : <Navigate to={LOGIN} replace />;
};

export default PrivateRoute;
