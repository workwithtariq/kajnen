// services/AuthService.js
import { ApiService } from './ApiService';
import axios from 'axios';

class AuthService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  async loginUser(phone, password) {
    try {
      const user = await this.apiService.postLogin(phone, password);
      return { success: true, user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async registerUser(userData) {
    try {
      const user = await this.apiService.postRegister(userData);
      return { success: true, user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

// Export an instance of AuthService with an axios adapter (Dependency Injection)
export const authService = new AuthService(new ApiService(axios));
