import { combineReducers } from 'redux';
import { ADD_TO_USERS_LIST } from './actions';

const metaReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_USERS_LIST:
      return action.meta;
    default:
      return state;
  }
};

const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_USERS_LIST:
      return [...state, ...action.list];
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
