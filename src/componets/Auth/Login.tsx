import type React from 'react';
import { useEffect } from 'react';
import { signInWithPopup, type User } from 'firebase/auth';
import { doc, getDoc, setDoc, type WithFieldValue } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db, provider } from '../../firebase';
import { useAuthContext } from './AuthContenxt';

type UserDocument = {
  id: string;
  userName: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const user = useAuthContext();
  useEffect(() => {
    // ログインしていたらリダイレクト
    user && navigate('/');
  }, [user]);

  const registerAcountWithFirestore = async (user: User) => {
    const accountData: WithFieldValue<UserDocument> = {
      id: user.uid,
      userName: user.displayName ?? user.uid,
    };
    await setDoc(doc(db, 'Users', user.uid), accountData);
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const userDoc = await getDoc(doc(db, 'Users', result.user.uid));
        // アカウントデータが存在しないなら追加
        !userDoc.exists() && (await registerAcountWithFirestore(result.user));

        // /urlにリダイレクト
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ログイン中はnull
  return !user ? (
    <div className="login">
      <p>googleでログイン</p>
      <button onClick={loginWithGoogle}></button>
    </div>
  ) : null;
};

export default Login;
