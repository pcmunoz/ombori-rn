export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USER = 'LOAD_USER';
export const ADD_TO_USERS_LIST = 'ADD_TO_USERS_LIST';

export const loadUsersList = () => ({
  type: LOAD_USERS,
});

export const loadUser = () => ({
  type: LOAD_USER,
});
