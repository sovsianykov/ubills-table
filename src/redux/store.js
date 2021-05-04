import { createStore,  compose } from "redux";
import { AppReducer } from "./AppReducer";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'






export const  store = createStore( AppReducer , compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

