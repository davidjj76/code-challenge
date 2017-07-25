import React, { Component } from 'react';

import request from '../../request';

const withRequestData = (WrappedComponent, dataQuery, selectData) => (
  class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null,
        loading: true,
      };
    }

    componentDidMount() {
      request(dataQuery).then(response => {
        this.setState({
          data: selectData(response),
          loading: false,
        });
      });
    }

    render() {
      const { data, loading } = this.state;
      return (
        <WrappedComponent
          data={data}
          loading={loading}
          {...this.props}
        />);
    }

  }
);

export default withRequestData;
