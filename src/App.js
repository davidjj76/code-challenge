import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';

import styles from './app.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <ArticleList />
    <Footer />
  </div>
);

export default App;
