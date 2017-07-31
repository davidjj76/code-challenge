import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './articleDetail.css';

const ArticleDetail = ({ data }) => {
  const publishedRenderer = published => {
    const classes = [styles.published];
    if (published) {
      classes.push(styles.alreadyPublished);
    } else {
      classes.push(styles.notPublished);
    }
    return (
      <p className={classes.join(' ')}>
        {published ? 'Published' : 'Not published'}
      </p>
    );
  };

  const tagsRenderer = tags => (
    <div className={styles.tags}>
      <span>Tagged with: </span>
      {tags.map(tag =>
        <span key={tag} className={styles.tag}>
          {tag}
        </span>,
      )}
    </div>
  );

  return (
    <section className={styles.detail}>
      <header className={styles.header}>
        <h3 className={styles.title}>{data.author}</h3>
        <span className={styles.subtitle}>{data.title}</span>
      </header>
      {publishedRenderer(data.published)}
      <p className={styles.text}>{data.content}</p>
      {tagsRenderer(data.tags)}
      <Link className={styles.backHome} to="/">Back Home</Link>
    </section>
  );
};

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
