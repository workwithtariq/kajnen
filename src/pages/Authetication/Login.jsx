// pages/Login.jsx
import React from "react";
import { useRedirectIfAuthenticated } from "../../hooks/useRedirectIfAuthenticated";
import LoginForm from "./LoginForm";

const Login = () => {
  useRedirectIfAuthenticated();

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
