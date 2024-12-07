import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { RiArrowGoBackFill } from "react-icons/ri";


const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validateForm = () => {
    if (!email || !password) {
      setError("Both fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${VITE_SERVER_URL}/api/login`, {
        email,
        password,
      });
      login(response.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response ? err.response.data.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="self-start">
        <Link className="flex gap-2 items-center p-8" to={"/"}>
          <RiArrowGoBackFill /> back to welcome screen
        </Link>
      </nav>
      <div className="max-w-md mx-auto p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-transparent outline-none border border-zinc-400 focus:outline-none focus:border-[#5A8C70] rounded p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-transparent outline-none border border-zinc-400 focus:outline-none focus:border-[#5A8C70] rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5A8C70] hover:bg-[#4A6E57] text-white py-2 rounded-md mt-4"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            {"Don't have an account? "}
            <Link to={"/signup"} className="text-[#5A8C70] hover:text-[#4A6E57] font-bold text-base mx-1">
              Create New Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
