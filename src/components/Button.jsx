// components/Button.jsx
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, className = "", type = "button", ...props }) =>
  to ? (
    <Link to={to}>
      <button
        className={`px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      className={`px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );

export default Button;
