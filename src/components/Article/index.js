import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './article.css';

class Article extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    const { author, excerpt } = this.props;
    return (
      <div onClick={this.handleClick}>
        <article className={styles.content}>
          <header className={styles.header}>
            <h3 className={styles.title}>{author}</h3>
          </header>
          <p className={styles.text}>{excerpt}</p>
        </article>
      </div>
    );
  }
}

Article.propTypes = {
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Article;
