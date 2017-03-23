// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  ADD_TITLE
  // SAY_HELLO_ASYNC_REQUEST,
  // SAY_HELLO_ASYNC_SUCCESS,
  // SAY_HELLO_ASYNC_FAILURE,
} from '../action/start-story'

const initialState = Immutable.fromJS({
  title: ''
  // messageAsync: 'Initial reducer message for async call'
})

const createStoryReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ADD_TITLE:
      return state.set('title', action.payload)
    // case SAY_HELLO_ASYNC_REQUEST:
    //   return state.set('messageAsync', 'Loading...')
    // case SAY_HELLO_ASYNC_SUCCESS:
    //   return state.set('messageAsync', action.payload)
    // case SAY_HELLO_ASYNC_FAILURE:
    //   return state.set('messageAsync', 'No message received, please check your connection')
    default:
      return state
  }
}

export default createStoryReducer
