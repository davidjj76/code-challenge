import React from 'react';

import withRequestData from '../components/withRequestData';
import ArticleList from '../components/ArticleList';
import ArticleDetail from '../components/ArticleDetail';
import NotFound from '../components/NotFound';

import {
  fetchArticlesIfNeeded,
  fetchArticleIfNeeded,
} from '../actions';

export default [{
  path: '/',
  exact: true,
  component: withRequestData(ArticleList, {
    fetchAction: fetchArticlesIfNeeded,
    fieldData: 'articles',
    title: 'Article List',
    loadingText: 'Loading articles list...',
  }),
}, {
  path: '/:id',
  exact: true,
  component: withRequestData(ArticleDetail, {
    fetchAction: fetchArticleIfNeeded,
    fieldData: 'article',
    title: 'Article detail',
    loadingText: 'Loading article detail...',
  }),
}, {
  render: () => <NotFound text="404 - Not Found" />,
}];
