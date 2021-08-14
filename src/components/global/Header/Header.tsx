import React from 'react';
import AppRoutes from '../../../constants/AppRoutes';
import Styles from './Header.module.scss';

const Header = () => {
return (
    <div
      className={Styles.header}
      style={{ backgroundImage: `url(${AppRoutes.Home}background.png)` }}
    >
      <div className={Styles.shadow} />
      <div>
        <h1 className={Styles.title}>Nusflix</h1>
        <div className={Styles.subtitle}>El mejor catálogo de peliculas.</div>
      </div>
    </div>
  );
};

export default Header;
