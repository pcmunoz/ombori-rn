// ./src/sagas/index.js

import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_USERS, LOAD_USER, ADD_TO_USERS_LIST, ADD_META } from './actions';
import { getUsers } from './api/users';

export function* fetchUsers() {
  const response = yield call(getUsers);

  const { page, per_page, total, total_pages, data} = response;

  yield put({ type: ADD_TO_USERS_LIST, list: data.data, meta: { page, per_page, total, total_pages }});
}

export function* loadUsers() {
  yield takeEvery(LOAD_USERS, fetchUsers);
}

export default function* rootSaga() {
  yield all([loadUsers()]);
}
