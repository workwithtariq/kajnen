// components/Header.jsx
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = ({ isMenuOpen, toggleMenu }) => (
  <header className="bg-blue-500 text-white py-4 px-6 shadow-md flex justify-between items-center">
    <div className="text-lg font-bold">কাজ_নেন</div>
    <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
      {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  </header>
);

export default Header;
