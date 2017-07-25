import React from 'react';
import PropTypes from 'prop-types';

import styles from './articleDetail.css';

const ArticleDetail = ({
  data,
}) => (
  <section className={styles.detail}>
    <header className={styles.header}>
      <h3 className={styles.title}>{data.title}</h3>
    </header>
    <p className={styles.text}>{data.author}</p>
    <p className={styles.text}>{data.content}</p>
    <p className={styles.text}>{data.published}</p>
    <p className={styles.text}>{data.tags.join(',')}</p>
  </section>
);

ArticleDetail.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default ArticleDetail;
