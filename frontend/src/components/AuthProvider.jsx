import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);
    if (token) {
      console.log("Token found, setting user value");
      setUser(token);
    }
  }, []);

  useEffect(() => {
    console.log("User value after update:", user);
  }, [user]);

  const login = (token) => {
    setUser(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
