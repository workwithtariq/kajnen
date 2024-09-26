// pages/Register.jsx
import React from "react";
import { useRedirectIfAuthenticated } from "../../hooks/useRedirectIfAuthenticated";
import RegisterForm from "./RegisterForm";

const Register = () => {
  useRedirectIfAuthenticated();

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md h-full max-h-[90%] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800">নিবন্ধন</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
