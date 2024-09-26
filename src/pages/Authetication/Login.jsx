import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRedirectIfAuthenticated } from "../../hooks/useRedirectIfAuthenticated"; // Import new hook

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if user is already authenticated
  useRedirectIfAuthenticated();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(phone, password);

    if (result.success) {
      toast.success("Logged in successfully!");
      navigate("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Phone Input */}
          <div className="flex flex-col">
            <label className="text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
