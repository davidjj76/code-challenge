import {
  REQUEST_DATA,
  RECEIVE_DATA,
} from '../actions';

export default (state = {
  isFetching: false,
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
}, { type, isFetching, fieldData, data }) => {
  switch (type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching,
        data: {
          ...state.data,
          [fieldData]: data,
        },
      };
    default:
      return state;
  }
};
