import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ResourceDirectory from "./pages/ResourceDirectory";
import Navbar from "./components/Navbar";
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
import PropTypes from "prop-types";

function ProtectedLayout({ children }) {
  return (
    <>
      <Navbar /> {/* Navbar is rendered here */}
      <main>{children}</main> {/* Render the child components */}
    </>
  );
}

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/resources" element={<ResourceDirectory />} />
    </Routes>
  );
}

export default App;
