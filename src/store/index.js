import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const initialState = {
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
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
