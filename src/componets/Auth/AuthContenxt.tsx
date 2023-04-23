import type React from 'react';
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { type User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

// 型の第二候補 User | null | undefined
// User:ログイン済み null:未ログイン undefined:apiの結果前
const AuthContext = createContext<User | null>(null);

export const useAuthContext = (): User | null => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsbscribed = onAuthStateChanged(auth, (user) => {
      console.log('authContext');
      setUser(user);
    });

    return unsbscribed;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
