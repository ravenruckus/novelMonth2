// @flow

import 'babel-polyfill'

import setUpSocket from './socket'
import Immutable from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware  from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from '../shared/app'
import helloReducer from '../shared/reducer/hello'
import createStoryReducer from '../shared/reducer/start-story'
import writeStoryReducer from '../shared/reducer/write-story'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__

const store = createStore(combineReducers(
  { hello: helloReducer, createStory: createStoryReducer, writeStory: writeStoryReducer }),
  { hello: Immutable.fromJS(preloadedState.hello), createStory: Immutable.fromJS(preloadedState.createStory), writeStory: Immutable.fromJS(preloadedState.writeStory) },
  composeEnhancers(applyMiddleware(thunkMiddleware)))

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
   </BrowserRouter>
  </Provider>

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}

setUpSocket(store)