import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import withRequestData from '../withRequestData';
import ArticleList from '../ArticleList';
import ArticleDetail from '../ArticleDetail';

import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
} from '../../queries';

import styles from './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articleId: '',
    };
    this.handleArticleClick = this.handleArticleClick.bind(this);
  }

  handleArticleClick(articleId) {
    this.setState({
      articleId,
    });
  }

  render() {
    const { articleId } = this.state;

    const ArticleListWithRequestData = withRequestData(
      ArticleList, {
        dataQuery: ARTICLES_QUERY,
        selectData: response => response.data.articles,
        title: 'Article List',
        loadingText: 'Loading articles list...',
      },
    );

    const ArticleDetailWithRequestData = withRequestData(
        ArticleDetail, {
          dataQuery: ARTICLE_QUERY({ id: articleId }),
          selectData: response => response.data.article,
          title: 'Article detail',
          loadingText: 'Loading article detail...',
        },
      );

    return (
      <div className={styles.app}>
        <Header />
        {!articleId
          ? <ArticleListWithRequestData onArticleClick={this.handleArticleClick} />
          : null
        }
        {articleId
          ? <ArticleDetailWithRequestData />
          : null}
        <Footer />
      </div>
    );
  }
}

export default App;
