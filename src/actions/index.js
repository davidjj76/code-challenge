import request from '../request';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

const requestData = () => ({
  type: REQUEST_DATA,
  isFetching: true,
});

const receiveData = (data, fieldData) => ({
  type: RECEIVE_DATA,
  isFetching: false,
  fieldData,
  data: data[fieldData],
});

export const fetchData = (query, fieldData) => dispatch => {
  dispatch(requestData());
  return request(query)
    .then(response => dispatch(receiveData(response.data, fieldData)));
};
