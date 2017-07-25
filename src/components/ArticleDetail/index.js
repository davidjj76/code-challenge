import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import styles from './articleDetail.css';

const ArticleDetail = ({
  loading,
  data,
}) => (
  <main className={styles.main}>
    <header className={styles.header}>
      <h2>Article Detail</h2>
    </header>
    {loading ? (
      <p className={styles.loading}>Loading article...</p>
    ) : (
      <section className={styles.detail}>
        <Article
          author={data.author}
        />
      </section>
    )}
  </main>
);

ArticleDetail.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    published: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.string,
    ),
    title: PropTypes.string,
  }),
  loading: PropTypes.bool,
};

export default ArticleDetail;
