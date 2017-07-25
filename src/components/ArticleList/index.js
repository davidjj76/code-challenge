import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import styles from './articleList.css';

const ArticleList = ({
  data,
}) => (
  <section className={styles.list}>
    {data.map(({ id, author, excerpt }) => (
      <Article
        key={id}
        author={author}
        excerpt={excerpt}
      />
    ))}
  </section>
);

ArticleList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      excerpt: PropTypes.string,
    }),
  ),
};

export default ArticleList;
