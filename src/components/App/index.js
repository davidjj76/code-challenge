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
  ArticleList,
  ARTICLES_QUERY,
  response => response.data.articles,
);

const ArticleDetailWithRequestData = withRequestData(
  ArticleDetail,
  ARTICLE_QUERY({ id: '5977b54e06f609287440df01' }),
  response => response.data.article,
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
