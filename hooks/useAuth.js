// hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '@/store/features/auth/authSlice';
import { useEffect } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return { user, token, isAuthenticated };
};