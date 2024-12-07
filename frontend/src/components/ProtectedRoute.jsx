import React, { useContext } from "react";
import { Navigate } from "react-router-dom"; // For redirecting to the login page
import { AuthContext } from "../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return isAuthenticated ? children : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
