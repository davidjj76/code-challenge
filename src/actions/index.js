import request from '../request';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ERR_RECEIVE_DATA = 'ERR_RECEIVE_DATA';

const requestData = () => ({
  type: REQUEST_DATA,
});

const receiveData = (data, fieldData) => ({
  type: RECEIVE_DATA,
  fieldData,
  data: data[fieldData],
});

const errReceiveData = err => ({
  type: ERR_RECEIVE_DATA,
  err,
});

export const fetchData = (query, fieldData) => dispatch => {
  dispatch(requestData());
  return request(query)
    .then(response => {
      if (response.errors) {
        dispatch(errReceiveData(response.errors[0].message));
      } else {
        dispatch(receiveData(response.data, fieldData));
      }
    })
    .catch(err => dispatch(errReceiveData(err)));
};
