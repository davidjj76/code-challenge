import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestData } from '../../actions';

import Loading from '../Loading';
import NotFound from '../NotFound';

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
        err: null,
        loading: true,
      };
    }

    componentDidMount() {
      // eslint-disable-next-line react/prop-types
      const { match, dispatch } = this.props;
      dispatch(requestData(true));
      request(dataQuery(match.params))
        .then(response => {
          this.setState({
            data: selectData(response),
            loading: false,
          });
          dispatch(requestData(false));
        })
        .catch(err => {
          this.setState({
            err,
            loading: false,
          });
          dispatch(requestData(false));
        });
    }

    render() {
      const { data, err, loading } = this.state;
      return (
        <main className={styles.main}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          {loading && <Loading text={loadingText} />}
          {err && <NotFound text={err.toString()} />}
          {!err && !loading && <WrappedComponent data={data} {...this.props} />}
        </main>
      );
    }

    const mapStateToProps = state => {
      const { isLoading } = state;
      const { isLoading } = { isLoading: false }
    }
    connect(mapStateToProps)(WrappedComponent);

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}


  }
);

export default withRequestData;
