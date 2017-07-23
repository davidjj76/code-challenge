import React, { Component } from 'react';

import Article from '../Article';

import request from '../../request';
import { ARTICLES_QUERY } from '../../queries';

import styles from './articleList.css';

class ArticleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      articles: [],
    };
  }

  componentDidMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({
        loading: false,
        articles: response.data.articles,
      });
    });
  }

  render() {
    const { loading, articles } = this.state;
    return (
      <main className={styles.main}>
        <header className={styles.header}>
          <h2>Articles List</h2>
        </header>
        {loading ? (
          <p className={styles.loading}>Loading articles...</p>
        ) : (
          <section className={styles.articleList}>
            {articles.map(({ id, author, excerpt }) => (
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
  }

}

export default ArticleList;
