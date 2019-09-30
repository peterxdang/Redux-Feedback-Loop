import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

//feelingRateReducer fetches rating from Home/
const feelingRateReducer = (state = [], action) => {
    if (action.type === 'ADD_RATE_FEEl') {
        state = action.payload
    }
    return state
    
}

const comprehendReducer = (state = [], action) => {
    if (action.type === 'RATE_COMPREHEND') {
        state = action.payload
        console.log(action.payload)
    }
    return state
    
}

const supportReducer = (state = [], action) => {
    if (action.type === 'RATE_SUPPORT') {
        state = action.payload
        console.log(action.payload)
    }
    return state
    
}
const commentsReducer = (state = [], action) => {
    if (action.type === 'COMMENTS') {
        state = action.payload
        console.log(action.payload)
    }
    return state
    
}




//storing Reducers in Redux store
const reduxStore = createStore (
    combineReducers ({
        feelingRateReducer,
        comprehendReducer,
        supportReducer,
        commentsReducer

    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store = {reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
