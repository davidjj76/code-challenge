import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

const ArticleList = ({ articles }) => (
  <section>
    {articles.map(({ id, author, excerpt }) => (
      <Article
        key={id}
        author={author}
        excerpt={excerpt}
      />
    ))}
  </section>
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
