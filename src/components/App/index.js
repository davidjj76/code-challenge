import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import routes from '../routes';

import styles from './app.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
    <Footer />
  </div>
);

export default App;
