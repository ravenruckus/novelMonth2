// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
// import { ENTER_NEW_STORY } from '../../shared/routes'
// import { writeStoryReducer } from '../../shared/routes'
import { analyzePieceRoute } from '../../shared/routes'


export const ADD_PIECE1 = 'ADD_PIECE1'
export const ADD_PIECE2 = 'ADD_PIECE2'
export const ADD_PIECE3 = 'ADD_PIECE3'

export const ANALYZE_PIECE1_REQUEST = 'ANALYZE_PIECE1_REQUEST'
export const ANALYZE_PIECE1_SUCCESS = 'ANALYZE_PIECE1_SUCCESS'
export const ANALYZE_PIECE1_FAILURE = 'ANALYZE_PIECE1_FAILURE'

export const ANALYZE_PIECE1 = 'ANALYZE_PIECE1'
export const ANALYZE_PIECE2 = 'ANALYZE_PIECE2'
export const ANALYZE_PIECE3 = 'ANALYZE_PIECE3'

export const SHOW_TONE = 'SHOW_TONE'
export const HIDE_TONE = 'HIDE_TONE'
export const CHANGE_SENTENCE_ID = 'CHANGE_SENTENCE_ID'

export const analyzePiece1Request = createAction(ANALYZE_PIECE1_REQUEST)
export const analyzePiece1Success = createAction(ANALYZE_PIECE1_SUCCESS)
export const analyzePiece1Failure = createAction(ANALYZE_PIECE1_FAILURE)

export const addPiece1 = createAction(ADD_PIECE1)
export const addPiece2 = createAction(ADD_PIECE2)
export const addPiece3 = createAction(ADD_PIECE3)
export const analyzePiece1 = createAction(ANALYZE_PIECE1)
export const analyzePiece2 = createAction(ANALYZE_PIECE2)
export const analyzePiece3 = createAction(ANALYZE_PIECE3)

export const showTone = createAction(SHOW_TONE)
export const hideTone = createAction(HIDE_TONE)
export const changeSentenceId = createAction(CHANGE_SENTENCE_ID)



export const analyzeStoryActions1 = (originalPieceId: number, userBookId: number, pieceNumber: num) => (dispatch: Function, getstate: Function) => {

  const text = getstate().writeStory.get('piece1')
  console.log('in action text', text)
  const micro_piece_1 = 't';
  const micro_piece_2 = 'f';
  const micro_piece_3 = 'f';
  const completed = 'f'; 

    dispatch(analyzePiece1Request())
     return fetch(analyzePieceRoute(originalPieceId, userBookId, pieceNumber, text, micro_piece_2, micro_piece_1, micro_piece_3, completed), { method: 'POST', credentials: 'same-origin' })
      .then((res) => {
        console.log('in fetch then', res)
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then((data) => {
        console.log('data before success dispatch', data)
        console.log('state before succes dispatch', getstate())
        if (!data) throw Error('No story piece received')
        const sentences = data.data

        console.log('sentences', sentences)

        dispatch(analyzePiece1Success(sentences))
        console.log('after anaylze success', getstate())
      })
      .catch(() => {
        dispatch(analyzePiece1Failure())
        console.log('after failure', getstate())
      })
  }
