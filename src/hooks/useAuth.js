// hooks/useAuth.js
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { authService } from '../services/AuthService';

export const useAuth = () => {
  const { user, login, logout } = useContext(UserContext);

  const loginUser = async (phone, password) => {
    const { success, user: loggedInUser, message } = await authService.loginUser(phone, password);
    if (success) {
      login(loggedInUser); // Update context with logged-in user
    }
    return { success, message };
  };

  const registerUser = async (userData) => {
    const { success, user: registeredUser, message } = await authService.registerUser(userData);
    if (success) {
      login(registeredUser); // Update context with logged-in user
    }
    return { success, message };
  };

  return { user, loginUser, registerUser, logout };
};
