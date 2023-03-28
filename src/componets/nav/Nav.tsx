import type React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav className="header-nav">
      <ul className="header-ul">
        <li>
          <NavLink
            to={'/ranking'}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            週刊ランキング
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            ライブラリ
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/record'}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            記録
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
