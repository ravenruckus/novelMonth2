// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import createStoryReducer from '../shared/reducer/start-story'
import writeStoryReducer from '../shared/reducer/write-story'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello && plainPartialState.createStory && plainPartialState.writeStory) {
    // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello))
    preloadedState.createStory = createStoryReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.createStory))
    preloadedState.writeStory = writeStoryReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.writeStory))
  }

  return createStore(combineReducers({ hello: helloReducer, createStory: createStoryReducer, writeStory: writeStoryReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
