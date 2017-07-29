import {
  REQUEST_DATA,
  SET_ARTICLES,
  SET_ARTICLE,
  ERR_REQUEST_DATA,
} from '../actions';

export default (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
        err: null,
      };
    case SET_ARTICLES:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          articles: action.articles,
        },
      };
    case SET_ARTICLE:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          article: action.article,
        },
      };
    case ERR_REQUEST_DATA:
      return {
        ...state,
        isFetching: false,
        err: action.err,
      };
    default:
      return state;
  }
};
