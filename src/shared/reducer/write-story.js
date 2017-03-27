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
  HIDE_TONE,
  SHOW_TONE,
  CHANGE_SENTENCE_ID,
} from '../action/write-story'

const initialState = Immutable.fromJS({
  piece1: '',
  piece2: '',
  piece3: '',
  analyze1: [],
  analyze2: '',
  analyze3: '',
  loading: '',
  toneView: 'none',
  sentenceId: 0,
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
    case HIDE_TONE:
        return state.set('toneView', 'none')
    case SHOW_TONE:
        return state.set('toneView', 'inline-block')
    case CHANGE_SENTENCE_ID:
        return state.set('sentenceId', action.payload)
    default:
      return state
  }
}

export default writeStoryReducer
