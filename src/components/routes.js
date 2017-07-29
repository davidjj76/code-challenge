import React from 'react';

import withRequestData from './withRequestData';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import NotFound from './NotFound';

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
    fetchParams: params => params.id,
    fieldData: 'article',
    title: 'Article detail',
    loadingText: 'Loading article detail...',
  }),
}, {
  render: () => <NotFound text="404 - Not Found" />,
}];
