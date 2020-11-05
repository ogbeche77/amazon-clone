import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
//const { default: data } = require("./data");

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//Add redux to browser
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;