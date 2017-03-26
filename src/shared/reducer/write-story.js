// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  ADD_PIECE1,
  ADD_PIECE2,
  ADD_PIECE3,
  ANALYZE_PIECE1_REQUEST,
  ANALYZE_PIECE1_SUCCESS,
  ANALYZE_PIECE1_FAILURE,
} from '../action/write-story'

const initialState = Immutable.fromJS({
  piece1: '',
  piece2: '',
  piece3: '',
  analyze1: [],
  analyze2: '',
  analyze3: '',
  loading: '',
})

const writeStoryReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case ADD_PIECE1:
      return state.set('piece1', action.payload)
    case ADD_PIECE2:
      return state.set('piece2', action.payload)
    case ADD_PIECE3:
      return state.set('piece3', action.payload)
    case ANALYZE_PIECE1_REQUEST:
      return state.set('loading', 'loading')
    case ANALYZE_PIECE1_SUCCESS:
        return state.set('analyze1', action.payload).set('loading', '')
    case  ANALYZE_PIECE1_FAILURE:
        return state.set('analyze1', ['no data'])
    // case START_STORY_REQUEST:
    //   return state.set('newStory', 'Loading...')
    // case START_STORY_SUCCESS:
    //   return state.set('title', '')
    // case START_STORY_FAILURE:
    //   return state.set('newStory', 'No message received, please check your connection')
    default:
      return state
  }
}

export default writeStoryReducer
