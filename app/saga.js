import R from 'ramda';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { LOAD_USERS, ADD_TO_USERS_LIST } from './actions';
import { getUsers } from './api/users';

const normalizeUser = user => ({
  id: user.id,
  email: user.email,
  firstName: user.first_name,
  lastName: user.last_name,
  avatar: user.avatar,
});

const normalizeMeta = meta => ({
  page: meta.page,
  perPage: meta.per_page,
  total: meta.total,
  totalPages: meta.total_pages,
});

const getMeta = R.path(['users', 'meta']);

export function* fetchUsers() {
  const meta = yield select(getMeta);
  let page = 1;
  if (meta) {
    page = meta.page + 1 < meta.totalPages ? meta.page : meta.totalPages;
  }

  const response = yield call(getUsers, page);

  const normalizeUsers = R.map(normalizeUser, response.data.data);

  yield put({
    type: ADD_TO_USERS_LIST,
    list: normalizeUsers,
    meta: normalizeMeta(response.data),
  });
}

export function* loadUsers() {
  yield takeEvery(LOAD_USERS, fetchUsers);
}

export default function* rootSaga() {
  yield all([loadUsers()]);
}
