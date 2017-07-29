import {
  REQUEST_DATA,
  RECEIVE_ARTICLES,
  RECEIVE_ARTICLE,
  ERR_RECEIVE_DATA,
} from '../actions';

export default (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
        err: null,
      };
    case RECEIVE_ARTICLES:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          articles: action.articles,
        },
      };
    case RECEIVE_ARTICLE:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          article: action.article,
        },
      };
    case ERR_RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        err: action.err,
      };
    default:
      return state;
  }
};
