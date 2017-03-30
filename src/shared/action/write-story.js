// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
// import { ENTER_NEW_STORY } from '../../shared/routes'
// import { writeStoryReducer } from '../../shared/routes'
import { analyzePieceRoute, getPieceRoute,  getOriginalRoute } from '../../shared/routes'



export const ADD_PIECE1 = 'ADD_PIECE1'
export const ADD_PIECE2 = 'ADD_PIECE2'
export const ADD_PIECE3 = 'ADD_PIECE3'

export const ANALYZE_PIECE1_REQUEST = 'ANALYZE_PIECE1_REQUEST'
export const ANALYZE_PIECE1_SUCCESS = 'ANALYZE_PIECE1_SUCCESS'
export const ANALYZE_PIECE1_FAILURE = 'ANALYZE_PIECE1_FAILURE'

export const ANALYZE_PIECE2_REQUEST = 'ANALYZE_PIECE2_REQUEST'
export const ANALYZE_PIECE2_SUCCESS = 'ANALYZE_PIECE2_SUCCESS'
export const ANALYZE_PIECE2_FAILURE = 'ANALYZE_PIECE2_FAILURE'

export const ANALYZE_PIECE3_REQUEST = 'ANALYZE_PIECE3_REQUEST'
export const ANALYZE_PIECE3_SUCCESS = 'ANALYZE_PIECE3_SUCCESS'
export const ANALYZE_PIECE3_FAILURE = 'ANALYZE_PIECE3_FAILURE'

export const ANALYZE_PIECE1 = 'ANALYZE_PIECE1'
export const ANALYZE_PIECE2 = 'ANALYZE_PIECE2'
export const ANALYZE_PIECE3 = 'ANALYZE_PIECE3'

export const GET_PIECE_DB1_REQUEST = 'GET_PIECE_DB1_REQUEST'
export const GET_PIECE_DB1_SUCCESS = 'GET_PIECE_DB1_SUCCESS'
export const GET_PIECE_DB1_FAILURE = 'GET_PIECE_DB1_FAILURE'

export const GET_ORIG_REQUEST = 'GET_ORIG_REQUEST'
export const GET_ORIG_SUCCESS = 'GET_ORIG_SUCCESS'
export const GET_ORIG_FAILURE = 'GET_ORIG_FAILURE'

export const GET_ORIG_REQUEST2 = 'GET_ORIG_REQUEST2'
export const GET_ORIG_SUCCESS2 = 'GET_ORIG_SUCCESS2'
export const GET_ORIG_FAILURE2 = 'GET_ORIG_FAILURE2'

export const GET_ORIG_REQUEST3 = 'GET_ORIG_REQUEST3'
export const GET_ORIG_SUCCESS3 = 'GET_ORIG_SUCCESS3'
export const GET_ORIG_FAILURE3 = 'GET_ORIG_FAILURE3'



export const SHOW_TONE = 'SHOW_TONE'
export const HIDE_TONE = 'HIDE_TONE'
export const CHANGE_SENTENCE_ID = 'CHANGE_SENTENCE_ID'

export const analyzePiece1Request = createAction(ANALYZE_PIECE1_REQUEST)
export const analyzePiece1Success = createAction(ANALYZE_PIECE1_SUCCESS)
export const analyzePiece1Failure = createAction(ANALYZE_PIECE1_FAILURE)

export const analyzePiece2Request = createAction(ANALYZE_PIECE2_REQUEST)
export const analyzePiece2Success = createAction(ANALYZE_PIECE2_SUCCESS)
export const analyzePiece2Failure = createAction(ANALYZE_PIECE2_FAILURE)

export const analyzePiece3Request = createAction(ANALYZE_PIECE3_REQUEST)
export const analyzePiece3Success = createAction(ANALYZE_PIECE3_SUCCESS)
export const analyzePiece3Failure = createAction(ANALYZE_PIECE3_FAILURE)

export const getPieceDb1Request =createAction(GET_PIECE_DB1_REQUEST)
export const getPieceDb1Success =createAction(GET_PIECE_DB1_SUCCESS)
export const getPieceDb1Failure =createAction(GET_PIECE_DB1_FAILURE)

export const addPiece1 = createAction(ADD_PIECE1)
export const addPiece2 = createAction(ADD_PIECE2)
export const addPiece3 = createAction(ADD_PIECE3)
export const analyzePiece1 = createAction(ANALYZE_PIECE1)
export const analyzePiece2 = createAction(ANALYZE_PIECE2)
export const analyzePiece3 = createAction(ANALYZE_PIECE3)

export const getOrigRequest= createAction(GET_ORIG_REQUEST)
export const getOrigSuccess= createAction(GET_ORIG_SUCCESS)
export const getOrigFailure= createAction(GET_ORIG_FAILURE)

export const getOrigRequest2= createAction(GET_ORIG_REQUEST2)
export const getOrigSuccess2= createAction(GET_ORIG_SUCCESS2)
export const getOrigFailure2= createAction(GET_ORIG_FAILURE2)

export const getOrigRequest3= createAction(GET_ORIG_REQUEST3)
export const getOrigSuccess3= createAction(GET_ORIG_SUCCESS3)
export const getOrigFailure3= createAction(GET_ORIG_FAILURE3)


export const showTone = createAction(SHOW_TONE)
export const hideTone = createAction(HIDE_TONE)
export const changeSentenceId = createAction(CHANGE_SENTENCE_ID)



// export const analyzeStoryActions1 = (originalPieceId: number, userBookId: number, pieceNumber: num, microPiece: num) => (dispatch: Function, getstate: Function) => {
//
//   const text = getstate().writeStory.get('piece1')
//   console.log('in action text', text)
//   const micro_piece_1 = 't';
//   const micro_piece_2 = 'f';
//   const micro_piece_3 = 'f';
//   const completed = 'f';
//
//     dispatch(analyzePiece1Request())
//      return fetch(analyzePieceRoute(originalPieceId, userBookId, pieceNumber, text, micro_piece_2, micro_piece_1, micro_piece_3, completed), { method: 'POST', credentials: 'same-origin' })
//       .then((res) => {
//         console.log('in fetch then', res)
//         if (!res.ok) throw Error(res.statusText)
//         return res.json()
//       })
//       .then((data) => {
//         console.log('data before success dispatch', data)
//         console.log('state before succes dispatch', getstate())
//         if (!data) throw Error('No story piece received')
//         const sentences = data.data
//
//         console.log('sentences', sentences)
//
//         dispatch(analyzePiece1Success(sentences))
//         console.log('after anaylze success', getstate())
//       })
//       .catch(() => {
//         dispatch(analyzePiece1Failure())
//         console.log('after failure', getstate())
//       })
//   }


export const analyzeStoryActions1 = (originalPieceId: number, userBookId: number, pieceNumber: num, microPiece: num) => (dispatch: Function, getstate: Function) => {

  let micro_piece_1 = 'f';
  let micro_piece_2 = 'f';
  let micro_piece_3 = 'f';
  let completed = 'f';
  let text = []
  if (microPiece === 1) {
    micro_piece_1 = 't'
    text = getstate().writeStory.get('piece1')
    console.log('in action text1', text)
    dispatch(analyzePiece1Request())
  } else if (microPiece === 2) {
    micro_piece_2 = 't'
    text = getstate().writeStory.get('piece2')
    console.log('in action text2', text)
    dispatch(analyzePiece2Request())
  } else if (microPiece === 3) {
    micro_piece_3 = 't'
    text = getstate().writeStory.get('piece3')
    console.log('in action text3', text)
    dispatch(analyzePiece3Request())
  }
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
        if (microPiece === 1) {
          dispatch(analyzePiece1Success(sentences))
        } else if (microPiece === 2) {
          dispatch(analyzePiece2Success(sentences))
        } else if (microPiece === 3) {
          dispatch(analyzePiece3Success(sentences))
        }
        console.log('after anaylze success', getstate())
      })
      .catch(() => {
        if (microPiece === 1) {
          dispatch(analyzePiece1Failure())
        } else if (microPiece === 2) {
          dispatch(analyzePiece2Failure())
        } else if (microPiece === 3) {
          dispatch(analyzePiece3Failure())
        }
        console.log('after failure', getstate())
      })
  }

  export const getPieceDbActions = (userBookId: number, pieceNumber: num) => (dispatch: Function, getstate: Function) => {
    console.log('userBookId in db request actions', userBookId)
    console.log('pieceNumber in db request actions', pieceNumber)
    dispatch(getPieceDb1Request())
    return fetch(getPieceRoute(userBookId, pieceNumber), { method: 'GET', credentials: 'same-origin' })
     .then((res) => {
       console.log('in fetch then', res)
       if (!res.ok) throw Error(res.statusText)
       return res.json()
     })
     .then((data) => {
       console.log('data before success dispatch in db request', data.data)
       console.log('state before succes dispatch', getstate())
      //  if (!data) throw Error('No story piece received')
       const sentences = data.data

       console.log('sentences', sentences)

       dispatch(getPieceDb1Success(sentences))
     })
     .catch(() => {
       dispatch(getPieceDb1Failure())
       console.log('after failure', getstate())
     })

  }

  export const getOrigActions = (micro_piece: number, piece_num: num ) => (dispatch: Function, getstate: Function) => {

    if(micro_piece === 1) {
      dispatch(getOrigRequest())
    }else if (micro_piece === 2) {
      dispatch(getOrigRequest2())
    }else {
      dispatch(getOrigRequest3())
    }

    return fetch(getOriginalRoute(micro_piece, piece_num), { method: 'GET', credentials: 'same-origin' } )
    .then((res) => {
      console.log('in fetch then', res)
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      console.log('data before success dispatch', data.data)
      console.log('state before succes dispatch', getstate())
     //  if (!data) throw Error('No story piece received')
      const sentences = data.data.data

      console.log('sentences in orig', sentences)

      if(micro_piece === 1) {
        dispatch(getOrigSuccess(sentences))
      }else if (micro_piece === 2) {
        dispatch(getOrigSuccess2(sentences))
      }else {
        dispatch(getOrigSuccess3(sentences))
      }

    })

    .catch(() => {
      if(micro_piece === 1) {
        dispatch(getOrigFailure())
      }else if (micro_piece === 2) {
        dispatch(getOrigFailure2())
      }else {
        dispatch(getOrigFailure3())
      }

      console.log('after failure', getstate())
    })
  }
