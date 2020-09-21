import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { theme } from 'theme'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import createStore from './store/configureStore'
import { App } from './App'
import { getSession, getUserData, UserData } from 'utils/session'
import { setCurrentUser } from 'store/authentication'
import { history } from 'utils'

const store = createStore({})

if (getSession()) {
  const userData: UserData = getUserData()
  store.dispatch(setCurrentUser(userData))
}

const Root: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
