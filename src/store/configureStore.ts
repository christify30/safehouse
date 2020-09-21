import { compose, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import reducers from './reducers'
import { rootEpic } from './epics'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = (initialStore: any) => {
  const store = createStore(
    reducers,
    initialStore,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )
  epicMiddleware.run(rootEpic)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
