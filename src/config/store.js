import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import filterMiddleware from './filterMiddleware';
import updateHashMiddleware from './updateHashMiddleware';

const store = createStore(reducers, applyMiddleware(filterMiddleware, updateHashMiddleware));

export default store;