import React, { Component } from 'react';

import request from '../../request';

import styles from './withRequestData.css';

const withRequestData = (WrappedComponent, {
  dataQuery,
  selectData,
  title,
  loadingText,
}) => (
  class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null,
        loading: true,
      };
    }

    componentDidMount() {
      // eslint-disable-next-line react/prop-types
      const { match } = this.props;
      request(dataQuery(match.params)).then(response => {
        this.setState({
          data: selectData(response),
          loading: false,
        });
      });
    }

    render() {
      const { data, loading } = this.state;
      return (
        <main className={styles.main}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          {loading ? (
            <p className={styles.loading}>{loadingText}</p>
          ) : (
            <WrappedComponent
              data={data}
              {...this.props}
            />
          )}
        </main>
      );
    }
  }
);

export default withRequestData;
