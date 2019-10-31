import React from 'react';
import { render } from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';
import App from './App.js'
import { Provider } from 'react-redux';
import store from './store'
render(
    <Provider store={store}>
    < HashRouter>
        <App />
        </HashRouter>
    </Provider>
    ,
    document.getElementById('app')
)
