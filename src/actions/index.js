import request from './request';

import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
} from './queries';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const ERR_RECEIVE_DATA = 'ERR_RECEIVE_DATA';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles,
});

const receiveArticle = article => ({
  type: RECEIVE_ARTICLE,
  article,
});

const errReceiveData = err => ({
  type: ERR_RECEIVE_DATA,
  err,
});

const fetchData = (dataQuery, receiveAction) => dispatch => {
  dispatch(requestData());
  return request(dataQuery)
    .then(response => {
      if (response.errors) {
        dispatch(errReceiveData('Data not found!!!'));
      } else {
        dispatch(receiveAction(response));
      }
    })
    .catch(err => dispatch(errReceiveData(err)));
};

const shouldFetchArticles = state => {
  const articles = state.data.articles;
  if (!articles.length) {
    return true;
  }
  return false;
};

const fetchArticles = () => dispatch => (
  dispatch(fetchData(
    ARTICLES_QUERY(),
    response => receiveArticles(response.data.articles),
  ))
);

export const fetchArticlesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchArticles(getState())) {
    return dispatch(fetchArticles());
  }
  return false;
};

const fetchArticle = id => dispatch => (
  dispatch(fetchData(
    ARTICLE_QUERY(id),
    response => receiveArticle(response.data.article),
  ))
);

export const fetchArticleIfNeeded = ({ id }) => (dispatch, getState) => {
  const articleToFetch = getState().data.articles.find(article => article.id === id);
  if (!articleToFetch) {
    return dispatch(fetchArticle(id));
  }
  return dispatch(receiveArticle(articleToFetch));
};
