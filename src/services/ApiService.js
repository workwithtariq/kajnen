// services/ApiService.js

const API_URL = process.env.REACT_APP_API_URL;

export class ApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async postLogin(phone, password) {
    try {
      const response = await this.httpClient.post(`${API_URL}/auth/login`, {
        phone,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  }

  async postRegister(userData) {
    try {
      const response = await this.httpClient.post(
        `${API_URL}/auth/register`,
        userData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  }

  async getCategoriesByParentId(categoryId = null) {
    try {
      const url = categoryId
        ? `${API_URL}/categories/${categoryId}/subcategories`
        : `${API_URL}/categories/top`;
      const response = await this.httpClient.get(url);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error fetching categories"
      );
    }
  }

  async getCategoryById(categoryId) {
    try {
      const response = await this.httpClient.get(
        `${API_URL}/categories/${categoryId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error fetching category"
      );
    }
  }
}
