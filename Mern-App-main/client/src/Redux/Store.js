import { createStore, applyMiddleware, compose } from 'redux'
import contactReducer from './Reducer/contactReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(contactReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store