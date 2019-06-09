import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Navigation from './navigation';
import Reducer from './reducer';
import { sagaMiddleware } from './middleware';
import saga from './saga';
import {loadUsersList} from './actions';

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);

store.dispatch(loadUsersList());
