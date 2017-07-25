import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import withRequestData from '../withRequestData';
import ArticleList from '../ArticleList';

import { ARTICLES_QUERY } from '../../queries';

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
