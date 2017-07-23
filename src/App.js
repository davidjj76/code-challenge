import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';

import request from './request';
import { ARTICLES_QUERY } from './queries';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    const { articles } = this.state;
    return (
      <main className="App">
        <Header />
        <ArticleList articles={articles} />
        <Footer />
      </main>
    );
  }
}

export default App;
