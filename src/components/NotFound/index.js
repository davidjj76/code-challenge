import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './notFound.css';

const NotFound = ({ text }) => (
  <section className={styles.notFound}>
    <p className={styles.text}>{text}</p>
    <Link className={styles.backHome} to="/">Back Home</Link>
  </section>
);

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NotFound;
