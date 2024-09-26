// components/Sidebar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    toggleMenu();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-blue-500 text-white w-64 shadow-lg transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">মেনু</h2>
        <button onClick={toggleMenu} className="text-white text-2xl">
          <AiOutlineClose />
        </button>
      </div>
      <nav className="flex flex-col p-6 space-y-4">
        <Link to="/" className="text-lg" onClick={toggleMenu}>
          হোম
        </Link>
        <Link to="/category" className="text-lg" onClick={toggleMenu}>
          কাজ খুঁজুন
        </Link>
        

        {user ? (
          <button
            onClick={handleLogout}
            className="text-lg text-red-500 mt-4 bg-white py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition"
          >
            লগ-আউট করুন
          </button>
        ) : (
          <div className="flex flex-col">
            <Link
              to="/login"
              onClick={toggleMenu}
              className="text-center text-lg text-blue-500 mt-4 bg-white py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              লগ-ইন করুন
            </Link>

            <Link
              to="/register"
              onClick={toggleMenu}
              className="text-center text-lg text-blue-500 mt-4 bg-white py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition"
            >
              নিবন্ধন করুন
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
