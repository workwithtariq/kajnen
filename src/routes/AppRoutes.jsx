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
import HomePage from "../pages/HomePage/HomePage";

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Router>
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
    </Router>
  );
};

export default AppRoutes;
