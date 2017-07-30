import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './components/App';

const middleware = [thunk];
const mockStore = configureStore(middleware);
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={mockStore(initialState)}>
      <Router>
        <App />
      </Router>
    </Provider>, div);
});
