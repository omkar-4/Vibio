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
import Test from "./pages/Test";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          // <ProtectedRoute>
            <Home />
          // {/* </ProtectedRoute> */}
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
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
