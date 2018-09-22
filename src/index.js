import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App/index';
import { createStore, applyMiddleware } from "redux";
import registerServiceWorker from './registerServiceWorker';
import reducers from "./views/App/reducers/";
import { Provider } from "react-redux";

let store = createStore(reducers);
window.store = store;

ReactDOM.render(
    <Provider store={ store }>
    <App />
    </Provider>,
    document.getElementById('root'))
registerServiceWorker();
