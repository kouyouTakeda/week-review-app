import type React from 'react';
import './UserInfo.scss';
import { useAuthContext } from '../Auth/AuthContenxt';

const UserInfo: React.FC = () => {
  const user = useAuthContext();

  return (
    <div className="user-info">
      <div className="user-info-icon">
        <img src={user?.photoURL ?? '../../../public/img/damy.png'} alt="" />
      </div>
      <div className="user-info-text">
        <p>{user?.displayName ?? '未ログイン'}</p>
        <p>{user?.uid}</p>
      </div>
    </div>
  );
};

export default UserInfo;
