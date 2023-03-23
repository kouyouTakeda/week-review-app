import type React from 'react';
import Nav from '../nav/Nav';
import UserInfo from '../userInfo/UserInfo';

const Header: React.FC = () => {
  return (
    <>
      <UserInfo />
      <Nav />
    </>
  );
};

export default Header;
