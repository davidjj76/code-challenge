import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import withRequestData from './components/withRequestData';
import ArticleList from './components/ArticleList';

import { ARTICLES_QUERY } from './queries';

import styles from './app.css';

const ArticleListWithRequestData = withRequestData(
  ArticleList,
  ARTICLES_QUERY,
  response => response.data.articles,
);

const App = () => (
  <div className={styles.app}>
    <Header />
    <ArticleListWithRequestData />
    <Footer />
  </div>
);

export default App;
