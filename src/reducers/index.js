import { REQUEST_DATA } from '../actions';

export default (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: action.isLoading,
      };
    default:
      return state;
  }
};
