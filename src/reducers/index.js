import {
  REQUEST_DATA,
  RECEIVE_DATA,
  ERR_RECEIVE_DATA,
} from '../actions';

export default (state = {
  isFetching: false,
  err: null,
  data: {
    articles: [],
    article: {
      author: '',
      content: '',
      published: false,
      tags: [],
      title: '',
    },
  },
}, { type, err, fieldData, data }) => {
  switch (type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
        err: null,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          [fieldData]: data,
        },
        err: null,
      };
    case ERR_RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        err,
      };
    default:
      return state;
  }
};
