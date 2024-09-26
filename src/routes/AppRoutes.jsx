import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CategoryPage from "../components/category/CategoryPage";
import { useAuth } from "../hooks/useAuth";
import Login from "../pages/Authetication/Login";
import Register from "../pages/Authetication/Register";
import Footer from "../pages/HomePage/Footer";
import Header from "../pages/HomePage/Header";
import HomePage from "../pages/HomePage/HomePage";
import Sidebar from "../pages/HomePage/Sidebar";

const AppRoutes = () => {
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative pb-32">
        {/* Header is now available globally in App.js */}
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Sidebar will also be available globally */}
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Overlay when the sidebar is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={toggleMenu} // Close sidebar when clicking outside
          ></div>
        )}

        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                user ? <h1>Welcome to Dashboard!</h1> : <Navigate to="/login" />
              }
            />
            <Route path="/category" element={<CategoryPage />} />{" "}
            {/* This is the new route */}
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            {/* <Route path="/updateproduct/:id" element={<UpdateProductPage />} /> */}
            {/* <Route path="/laptops" element={<ProductsPage category="laptops" />} /> */}
            {/* <Route path="/phones" element={<ProductsPage category="phones" />} /> */}
            {/* <Route path="/products/:id" element={<ProductPage />} /> */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
