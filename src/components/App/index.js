import React from 'react';

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
    dataQuery: ARTICLE_QUERY({ id: '5977b54e06f609287440df01' }),
    selectData: response => response.data.article,
    title: 'Article detail',
    loadingText: 'Loading article detail...',
  },
);

const App = () => (
  <div className={styles.app}>
    <Header />
    <ArticleListWithRequestData />
    <ArticleDetailWithRequestData />
    <Footer />
  </div>
);

export default App;
