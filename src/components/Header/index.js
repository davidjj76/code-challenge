import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <h1 className={styles.title}>
        Billin code challenge
      </h1>
    </Link>
  </header>
);

export default Header;
