import React from 'react';
import PropTypes from 'prop-types';

import styles from './article.css';

const Article = ({ author, excerpt }) => (
  <div>
    <article className={styles.content}>
      <header className={styles.header}>
        <h3 className={styles.title}>{author}</h3>
      </header>
      <p className={styles.text}>{excerpt}</p>
    </article>
  </div>
);

Article.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
};

export default Article;
