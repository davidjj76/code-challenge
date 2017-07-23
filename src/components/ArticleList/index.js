import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import styles from './articleList.css';

const ArticleList = ({ articles }) => (
  <main className={styles.main}>
    <header class_name={styles.header}>
      <h2>Articles List</h2>
    </header>
    <section className={styles.articleList}>
      {articles.map(({ id, author, excerpt }) => (
        <Article
          key={id}
          author={author}
          excerpt={excerpt}
        />
      ))}
    </section>
  </main>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      excerpt: PropTypes.string,
    }),
  ),
};

export default ArticleList;
