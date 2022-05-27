import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../ContextAPI/UserAuthContext";

const Protected = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default Protected;
