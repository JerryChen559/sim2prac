import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import beerReducer from "../ducks/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let storeMiddleware = composeEnhancers(applyMiddleware(promiseMiddleware()));

export default createStore(beerReducer, storeMiddleware);
