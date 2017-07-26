import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './article.css';

const Article = ({
  id,
  author,
  excerpt,
}) => (
  <Link to={`/${id}`}>
    <div>
      <article className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.title}>{author}</h3>
        </header>
        <p className={styles.text}>{excerpt}</p>
      </article>
    </div>
  </Link>
);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Article;
