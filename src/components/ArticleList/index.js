import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import styles from './articleList.css';

const ArticleList = ({
  loading,
  data,
}) => (
  <main className={styles.main}>
    <header className={styles.header}>
      <h2>Articles List</h2>
    </header>
    {loading ? (
      <p className={styles.loading}>Loading articles...</p>
    ) : (
      <section className={styles.articleList}>
        {data.map(({ id, author, excerpt }) => (
          <Article
            key={id}
            author={author}
            excerpt={excerpt}
          />
        ))}
      </section>
    )}
  </main>
);

ArticleList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      excerpt: PropTypes.string,
    }),
  ),
  loading: PropTypes.bool,
};

export default ArticleList;
