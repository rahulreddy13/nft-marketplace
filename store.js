import { legacy_createStore as createStore , applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from "./src/reducers/root-reducer";

const initstore = () =>{
    return createStore(rootReducer,composeWithDevTools(applyMiddleware()));
} 

export const wrapper = createWrapper(initstore)