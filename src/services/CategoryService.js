// services/CategoryService.js
export class CategoryService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async getTopCategories() {
    try {
      const data = await this.apiService.getCategoriesByParentId();
      return data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch top-level categories");
    }
  }

  async getSubCategories(categoryId) {
    try {
      const data = await this.apiService.getCategoriesByParentId(categoryId);
      return data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch subcategories");
    }
  }

  async getCategoryBreadcrumbs(categoryId) {
    try {
      let breadcrumbTrail = [];
      let currentCategoryId = categoryId;

      while (currentCategoryId) {
        const category = await this.apiService.getCategoryById(currentCategoryId);
        breadcrumbTrail.unshift(category);
        currentCategoryId = category.parentCategory;
      }

      breadcrumbTrail.unshift({ name: "Category", _id: "" });
      return breadcrumbTrail;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch category breadcrumbs");
    }
  }

  async getCategoryById(categoryId) {
    try {
      const category = await this.apiService.getCategoryById(categoryId);
      return category;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch category by ID");
    }
  }
}
