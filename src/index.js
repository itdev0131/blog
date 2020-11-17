import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import { store } from 'store'
import Routes from 'routes'
import reportWebVitals from './reportWebVitals'
import './styles/app.scss'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URI

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
