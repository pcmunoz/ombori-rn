import { combineReducers } from 'redux';
import R from 'ramda';
import { ADD_TO_USERS_LIST } from './actions';

const metaReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_USERS_LIST:
      return action.meta;
    default:
      return state;
  }
};

const idSort = R.sortWith([R.ascend(R.prop('id'))]);

const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_USERS_LIST:
      return idSort(R.concat(action.list, state));
    default:
      return state;
  }
};

const userReducer = combineReducers({
  list: listReducer,
  meta: metaReducer,
});

export default combineReducers({
  users: userReducer,
});
