import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger'

const feelingRateProducer = (state = [], action) => {
    if (action.type === 'ADD_RATE_FEEl') {
    console.log(action.payload)
    }

    return state
    
}


const reduxStore = createStore (
    combineReducers ({
        feelingRateProducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store = {reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
