import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import {Provider} from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);