import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import routes from '../../routes';

import styles from './app.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Switch>
      {routes.map((route, index) => (
        <Route {...route} key={index.toString()} />
      ))}
    </Switch>
    <Footer />
  </div>
);

export default App;
