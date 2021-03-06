import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

let persistor = persistStore(store)


sagaMiddleware.run(rootSaga);

export { store,persistor }