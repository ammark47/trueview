import { createStore, applyMiddleware, compose } from 'redux';
import authApp from './reducers/auth';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(authApp, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;