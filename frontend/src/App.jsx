import Axios from "axios";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LandingPage from "./pages/LandingPage";
import AuthProvider from "./components/AuthProvider";
import { AuthContext } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import ResourceDirectory from "./pages/ResourceDirectory";
import Navbar from "./components/NavBar";

function App() {
  const [data, setData] = useState();
  const { user } = useContext(AuthContext);
  console.log({ user });
  console.log(user);

  const getData = async () => {
    const res = await Axios.get("http://localhost:5000/getData");
    console.log(res);
    console.log(res.Data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute element={Home} />} />
          <Route path="/resources" element={<ResourceDirectory />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
