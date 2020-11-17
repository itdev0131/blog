import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const enhancers = [applyMiddleware(...middlewares)]
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

// mount it on store
export const store = createStore(reducers, composeEnhancers(...enhancers))
// run the saga
sagaMiddleware.run(sagas)
