import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "./Footer";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    const sidebar = document.getElementById("sidebar");
    if (isMenuOpen && sidebar && !sidebar.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add click event listener to close sidebar when clicking outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    
      <div className="flex flex-col h-screen relative">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
        )}

        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <MainContent />

        <Footer />
      </div>
    
  );
};

export default HomePage;
