import type React from 'react';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthContext } from './AuthContenxt';

const Logout: React.FC = () => {
  // 未ログインならリダイレクト
  const user = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    user ?? navigate('/login');
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logout');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>logout</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Logout;
