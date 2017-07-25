import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import styles from './articleDetail.css';

const ArticleDetail = ({
  data,
}) => (
  <section className={styles.detail}>
    <Article
      author={data.author}
    />
  </section>
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
};

export default ArticleDetail;
