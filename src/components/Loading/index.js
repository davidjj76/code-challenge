import React from 'react';
import PropTypes from 'prop-types';

import styles from './loading.css';

const Loading = ({ text }) => (
  <section className={styles.loading}>
    <p className={styles.text}>{text}</p>
  </section>
);

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loading;
