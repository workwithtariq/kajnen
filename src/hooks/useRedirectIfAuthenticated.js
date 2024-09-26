import { useEffect } from 'react';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

export const useRedirectIfAuthenticated = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user exists (already logged in) and redirect to home page if they are
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
};
