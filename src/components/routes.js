import React from 'react';

import withRequestData from './withRequestData';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import NotFound from './NotFound';

import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
} from '../queries';

export default [{
  path: '/',
  exact: true,
  component: withRequestData(ArticleList, {
    dataQuery: ARTICLES_QUERY,
    fieldData: 'articles',
    title: 'Article List',
    loadingText: 'Loading articles list...',
  }),
}, {
  path: '/:id',
  exact: true,
  component: withRequestData(ArticleDetail, {
    dataQuery: ARTICLE_QUERY,
    fieldData: 'article',
    title: 'Article detail',
    loadingText: 'Loading article detail...',
  }),
}, {
  render: () => <NotFound text="404 - Not Found" />,
}];
