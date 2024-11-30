import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom"; // For redirecting to the login page
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element: Element, ...rest }) => { 
  const {user} = useContext(AuthContext);
  console.log("user", user);
  

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Element {...rest} />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
