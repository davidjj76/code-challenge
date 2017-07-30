import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pencil from 'react-icons/lib/fa/pencil';

import Loading from '../Loading';
import NotFound from '../NotFound';

import styles from './withRequestData.css';

const withRequestData = (WrappedComponent, {
  fetchAction,
  fieldData,
  title,
  loadingText,
}) => {
  class WrapperComponent extends Component {

    static propTypes = {
      data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
      dispatch: PropTypes.func.isRequired,
      err: PropTypes.string, // eslint-disable-line react/forbid-prop-types
      isFetching: PropTypes.bool.isRequired,
      match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    componentDidMount() {
      const { match, dispatch } = this.props;
      dispatch(fetchAction(match.params));
    }

    render() {
      const { data, err, isFetching, ...rest } = this.props;
      return (
        <main className={styles.main}>
          <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.newArticle}>
              <Pencil className={styles.icon} size={30} />
              <span className={styles.buttonText}>write your article</span>
            </button>
          </header>
          {isFetching && <Loading text={loadingText} />}
          {!isFetching && err && <NotFound text={err} />}
          {!isFetching && !err && <WrappedComponent data={data[fieldData]} {...rest} />}
        </main>
      );
    }

  }

  const mapStateToProps = state => {
    const {
      isFetching,
      err,
      data,
    } = state;

    return {
      isFetching,
      err,
      data,
    };
  };

  return connect(mapStateToProps)(WrapperComponent);
};

export default withRequestData;
