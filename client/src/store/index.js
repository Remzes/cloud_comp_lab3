import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), reduxThunk);
const store = createStore(reducers, {}, middleware);

window.store = store;
export default store;