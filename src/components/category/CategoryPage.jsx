// pages/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiService } from "../../services/ApiService";
import { CategoryService } from "../../services/CategoryService";
import { axiosInstance } from "../../services/HttpClient";
import CategoryGrid from "./CategoryGrid";
import CategoryBreadcrumbs from "./CategoryBreadcrumbs";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);
  const [breadcrumbPath, setBreadcrumbPath] = useState([]);
  const navigate = useNavigate();

  const apiService = new ApiService(axiosInstance);
  const categoryService = new CategoryService(apiService); // Facade pattern with CategoryService

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = categoryId
          ? await categoryService.getSubCategories(categoryId)
          : await categoryService.getTopCategories();
        setCategories(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCategories();
  }, [categoryId]);

  useEffect(() => {
    const fetchBreadcrumbs = async () => {
      try {
        const breadcrumbTrail = await categoryService.getCategoryBreadcrumbs(categoryId);
        setBreadcrumbPath(breadcrumbTrail);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBreadcrumbs();
  }, [categoryId]);

  return (
    <div className="container">
      <CategoryBreadcrumbs categories={breadcrumbPath} />
      <CategoryGrid categories={categories} onClick={(id) => navigate(`/category/${id}`)} />
    </div>
  );
};

export default CategoryPage;
