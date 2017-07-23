import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, excerpt }) => (
  <article>
    <header>
      <h3>{author}</h3>
    </header>
    <p>{excerpt}</p>
  </article>
);

Article.propTypes = {
  author: PropTypes.string,
  excerpt: PropTypes.string,
};

export default Article;
