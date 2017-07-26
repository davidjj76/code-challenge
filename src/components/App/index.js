import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import withRequestData from '../withRequestData';
import ArticleList from '../ArticleList';
import ArticleDetail from '../ArticleDetail';
import NotFound from '../NotFound';

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
    dataQuery: ARTICLE_QUERY,
    selectData: response => response.data.article,
    title: 'Article detail',
    loadingText: 'Loading article detail...',
  },
);

const App = () => (
  <div className={styles.app}>
    <Header />
    <Switch>
      <Route exact path="/" component={ArticleListWithRequestData} />
      <Route exact path="/:id" component={ArticleDetailWithRequestData} />
      <Route render={() => <NotFound text="404 - Not Found" />} />
    </Switch>
    <Footer />
  </div>
);

export default App;
