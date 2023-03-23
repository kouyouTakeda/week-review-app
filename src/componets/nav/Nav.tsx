import type React from 'react';
import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav className="header-nav">
      <ul className="header-ul">
        <li>週刊ランキング</li>
        <li className="active">ライブラリ</li>
        <li>記録</li>
      </ul>
    </nav>
  );
};

export default Nav;
