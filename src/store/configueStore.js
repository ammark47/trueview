import { createStore, applyMiddleware } from 'redux';
import authApp from './reducers/auth';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(authApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;