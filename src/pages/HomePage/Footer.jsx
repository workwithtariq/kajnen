import React from "react";
import { FaHome, FaInfo, FaEnvelope, FaCog } from "react-icons/fa"; // Icons for Footer Navigation
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-4 px-6 flex justify-around items-center border-t">
      <Link to="/" className="flex flex-col items-center text-blue-500">
        <FaHome size={24} />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/about" className="flex flex-col items-center text-blue-500">
        <FaInfo size={24} />
        <span className="text-xs">About</span>
      </Link>
      <Link to="/contact" className="flex flex-col items-center text-blue-500">
        <FaEnvelope size={24} />
        <span className="text-xs">Contact</span>
      </Link>
      <Link to="/settings" className="flex flex-col items-center text-blue-500">
        <FaCog size={24} />
        <span className="text-xs">Settings</span>
      </Link>
    </footer>
  );
};

export default Footer;
