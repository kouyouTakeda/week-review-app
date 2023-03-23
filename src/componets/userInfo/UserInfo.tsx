import type React from 'react';
import './UserInfo.scss';

const UserInfo: React.FC = () => {
  return (
    <div className="user-info">
      <div className="user-info-icon">
        <img src="../../../public/img/damy.png" alt="" />
      </div>
      <div className="user-info-text">
        <p>ユーザー名</p>
        <p>ユーザーID</p>
      </div>
    </div>
  );
};

export default UserInfo;
