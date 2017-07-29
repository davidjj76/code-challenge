import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

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
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
