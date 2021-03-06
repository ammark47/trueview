import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "typeface-roboto";
import 'fontsource-roboto'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/configueStore'
import { store }  from './store/configueStore'
import { SnackbarProvider } from 'notistack'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <SnackbarProvider maxSnack={3}>
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
