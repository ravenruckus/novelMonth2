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
  ANALYZE_PIECE2_REQUEST,
  ANALYZE_PIECE2_SUCCESS,
  ANALYZE_PIECE2_FAILURE,
  ANALYZE_PIECE3_REQUEST,
  ANALYZE_PIECE3_SUCCESS,
  ANALYZE_PIECE3_FAILURE,
  HIDE_TONE,
  SHOW_TONE,
  CHANGE_SENTENCE_ID,
  GET_PIECE_DB1_REQUEST,
  GET_PIECE_DB1_SUCCESS,
  GET_PIECE_DB1_FAILURE,
  GET_PIECE_DB2_REQUEST,
  GET_PIECE_DB2_SUCCESS,
  GET_PIECE_DB2_FAILURE,
  GET_PIECE_DB3_REQUEST,
  GET_PIECE_DB3_SUCCESS,
  GET_PIECE_DB3_FAILURE,
  GET_ORIG_REQUEST,
  GET_ORIG_SUCCESS,
  GET_ORIG_FAILURE,
  GET_ORIG_REQUEST2,
  GET_ORIG_SUCCESS2,
  GET_ORIG_FAILURE2,
  GET_ORIG_REQUEST3,
  GET_ORIG_SUCCESS3,
  GET_ORIG_FAILURE3,
} from '../action/write-story'

const initialState = Immutable.fromJS({
  piece1: '',
  piece2: '',
  piece3: '',
  analyze1: [],
  analyze2: [],
  analyze3: [],
  analyzedDb1: [],
  analyzedDb2: [],
  analyzedDb3: [],
  origMicro1: [],
  origMicro2: [],
  origMicro3: [],
  loading: '',
  loadingOrig: '',
  loadingdb: '',
  toneView: 'none',
  sentenceId: '',
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
        return state.set('analyze1', [])
    case ANALYZE_PIECE2_REQUEST:
      return state.set('loading', 'loading')
    case ANALYZE_PIECE2_SUCCESS:
        return state.set('analyze2', action.payload)
    case  ANALYZE_PIECE2_FAILURE:
        return state.set('analyze2', [])
    case ANALYZE_PIECE3_REQUEST:
      return state.set('loading', 'loading')
    case ANALYZE_PIECE3_SUCCESS:
        return state.set('analyze3', action.payload).set('loading', '')
    case  ANALYZE_PIECE3_FAILURE:
        return state.set('analyze3', [])
    case HIDE_TONE:
        return state.set('toneView', 'none')
    case SHOW_TONE:
        return state.set('toneView', 'inline-block')
    case CHANGE_SENTENCE_ID:
        return state.set('sentenceId', action.payload)
    case GET_PIECE_DB1_REQUEST:
        return state.set('loadingdb', 'loading')
    case GET_PIECE_DB1_SUCCESS:
      return state.set('analyzedDb1', action.payload)
    case GET_PIECE_DB1_FAILURE:
        return state.set('analyzedDb1', [])
    case GET_PIECE_DB2_REQUEST:
        return state.set('loadingdb', 'loading')
    case GET_PIECE_DB2_SUCCESS:
      return state.set('analyzedDb2', action.payload)
    case GET_PIECE_DB2_FAILURE:
        return state.set('analyzedDb2', [])
    case GET_PIECE_DB3_REQUEST:
        return state.set('loadingdb', 'loading')
    case GET_PIECE_DB3_SUCCESS:
      return state.set('analyzedDb3', action.payload)
    case GET_PIECE_DB3_FAILURE:
        return state.set('analyzedDb3', [])
    case GET_ORIG_REQUEST:
      return state.set('loadingOrig', '')
    case GET_ORIG_SUCCESS:
      return state.set('origMicro1', action.payload)
    case GET_ORIG_FAILURE:
      return state.set('origMicro1', [])
    case GET_ORIG_REQUEST2:
      return state.set('loadingOrig', '')
    case GET_ORIG_SUCCESS2:
      return state.set('origMicro2', action.payload)
    case GET_ORIG_FAILURE2:
      return state.set('origMicro2', [])
    case GET_ORIG_REQUEST3:
      return state.set('loadingOrig', '')
    case GET_ORIG_SUCCESS3:
      return state.set('origMicro3', action.payload)
    case GET_ORIG_FAILURE3:
      return state.set('origMicro3', [])
    default:
      return state
  }
}

export default writeStoryReducer
