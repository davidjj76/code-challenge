import request from './request';

import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
} from './queries';

import {
  CREATE_ARTICLE_MUTATION,
} from './mutations';

export const REQUEST_DATA = 'REQUEST_DATA';
export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_ARTICLE = 'SET_ARTICLE';
export const ERR_REQUEST_DATA = 'ERR_REQUEST_DATA';

const requestData = () => ({
  type: REQUEST_DATA,
});

const setArticles = articles => ({
  type: SET_ARTICLES,
  articles,
});

const setArticle = article => ({
  type: SET_ARTICLE,
  article,
});

const errRequestData = err => ({
  type: ERR_REQUEST_DATA,
  err,
});

const fetchData = (dataQuery, receiveAction) => dispatch => {
  dispatch(requestData());
  return request(dataQuery)
    .then(response => {
      if (response.errors) {
        dispatch(errRequestData('Data not found!!!'));
      } else {
        dispatch(receiveAction(response));
      }
    })
    .catch(err => dispatch(errRequestData(err)));
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
    response => setArticles(response.data.articles),
  ))
);

export const fetchArticlesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchArticles(getState())) {
    return dispatch(fetchArticles());
  }
  return false;
};

const fetchArticle = params => dispatch => (
  dispatch(fetchData(
    ARTICLE_QUERY(params),
    response => setArticle(response.data.article),
  ))
);

export const fetchArticleIfNeeded = params => (dispatch, getState) => {
  const articleToFetch = getState().data.articles.find(article => article.id === params.id);
  if (!articleToFetch) {
    return dispatch(fetchArticle(params));
  }
  return dispatch(setArticle(articleToFetch));
};

export const createArticle = newArticle => (dispatch, getState) => {
  const articles = getState().data.articles;
  dispatch(fetchData(
    CREATE_ARTICLE_MUTATION(newArticle),
    response => setArticles([
      ...articles,
      response.data.createArticle,
    ]),
  ));
};
