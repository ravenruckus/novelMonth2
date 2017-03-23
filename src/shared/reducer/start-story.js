// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  ADD_TITLE,
  START_STORY_REQUEST,
  START_STORY_SUCCESS,
  START_STORY_FAILURE,
} from '../action/start-story'

const initialState = Immutable.fromJS({
  title: '',
  userId: '',
  newStory: ''
})

const createStoryReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ADD_TITLE:
      return state.set('title', action.payload)
    case START_STORY_REQUEST:
      return state.set('newStory', 'Loading...')
    case START_STORY_SUCCESS:
      return state.set('title', '')
    case START_STORY_FAILURE:
      return state.set('newStory', 'No message received, please check your connection')
    default:
      return state
  }
}

export default createStoryReducer
