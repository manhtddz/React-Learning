import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk';

import monitorReducersEnhancer from '../enhancers/monitorReducers.js'
import loggerMiddleware from '../middleware/logger.js'
import rootReducer from './rootReducer.js'

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}