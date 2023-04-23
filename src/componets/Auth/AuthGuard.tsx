import type React from 'react';
import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContenxt';

const AuthGuard: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    auth ?? navigate('/login');
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
