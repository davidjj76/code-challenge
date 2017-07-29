import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchData } from '../../actions';
import Loading from '../Loading';
// import NotFound from '../NotFound';

import styles from './withRequestData.css';

const withRequestData = (WrappedComponent, {
  dataQuery,
  fieldData,
  title,
  loadingText,
}) => {
  class WrapperComponent extends Component {

    static propTypes = {
      data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
      dispatch: PropTypes.func.isRequired,
      isFetching: PropTypes.bool.isRequired,
      match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    componentDidMount() {
      console.log('didmount');
      const { match, dispatch } = this.props;
      dispatch(fetchData(dataQuery(match.params), fieldData));
    }

    render() {
      console.log('render', this.props);
      const { data, isFetching, ...rest } = this.props;
      return (
        <main className={styles.main}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          {isFetching
            ? <Loading text={loadingText} />
            : <WrappedComponent data={data[fieldData]} {...rest} />
          }
        </main>
      );
    }

  }

  const mapStateToProps = state => {
    const {
      isFetching,
      data,
    } = state;

    return {
      isFetching,
      data,
    };
  };

  return connect(mapStateToProps)(WrapperComponent);
};

export default withRequestData;
