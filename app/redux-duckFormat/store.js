import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import reducer from './index';

const middleware = applyMiddleware(promise(), thunk)
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
)

export default store;