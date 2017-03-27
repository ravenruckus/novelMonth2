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


// export const analyzeStoryActions1 = (originalPieceId: number, userBookId: number, pieceNumber: num) => (dispatch: Function, getstate: Function) => {
//   //if piece1 does not have length or is empty dispath addPiece1, else if piece2 does not have length dispatch addPiece2, else if is piece3 does not have length make box dissapear.
//  // get text from state
//   const text = getstate().writeStory.get('piece1')
//   console.log('in action text', text)
//   const micro_piece_1 = 't';
//   const micro_piece_2 = 'f';
//   const micro_piece_3 = 'f';
//   const completed = 'f';
//
//       //maybe try and use axios.
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
//         // if (!data.writeStory) throw Error('No story piece received')
//         const sentences = data.data.sentences_tone
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


// export const analyzeStoryActions1 = (originalPieceId: number, userBookId: number, pieceNumber: num) => (dispatch: Function, getstate: Function) => {
//   //if piece1 does not have length or is empty dispath addPiece1, else if piece2 does not have length dispatch addPiece2, else if is piece3 does not have length make box dissapear.
//  // get text from state
//   const text = getstate().writeStory.get('piece1')
//   console.log('in action text', text)
//   const micro_piece_1 = 't';
//   const micro_piece_2 = 'f';
//   const micro_piece_3 = 'f';
//   const completed = 'f';
//
//       //maybe try and use axios.
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
//         // if (!data.writeStory) throw Error('No story piece received')
//         const sentences = data.data.sentences_tone
//
//         console.log('sentences', sentences)
//
//         dispatch(analyzePiece1Success(sentences))
//         console.log('after anaylze success', getstate())
//         return sentences
//       })
//       ///make a structure that has sentences, tones, and an array of classes for each sentence depending on the emotion score. If the emotion score of that sentence is above .6 for that emotion push that class to the array and then add the array to the sentence object
//       //instead of an array use a string and that changes so that there is one background color for each sentence
//
//       //go through the tones and if one is above .60 change color if none are above then the color will be white for the background I can make it translusent later. don't forget to include sentence id
//       .then((sentences2) => {
//         console.log('in then test', sentences2)
//         const sentArr = []
//         for(const t of sentences2) {
//
//           let color = 'white'
//
//            if (t.tone_categories[0].tones[0].score > .6) {
//              color = 'red'
//            }
//            if (t.tone_categories[0].tones[1].score > .6) {
//              color = 'yellow'
//            }
//            if (t.tone_categories[0].tones[2].score > .6) {
//              color = 'green'
//            }
//            if (t.tone_categories[0].tones[3].score > .6) {
//              color = 'pink'
//            }
//            if (t.tone_categories[0].tones[4].score > .6) {
//              color = 'blue'
//            }
//
//           sentArr.push([{text: t.text, sentence_id: t.sentence_id, tones: t.tone_categories[0], color: color}])
//         }
//         console.log('sent arr', sentArr)
//
//       })
//       .catch(() => {
//         dispatch(analyzePiece1Failure())
//         console.log('after failure', getstate())
//       })
//   }
//
//   export const changeToneView = () => (dispatch: Function, getstate: Function) => {
//     const tone = getstate().writeStory.get('toneView')
//     tone == "none" ? dispatch(showTone()) : dispatch(hideTone())
//   }
//
//   export const startChangeSentenceId = (sentence_id: number) => (dispatch: Function) => {
//     dispatch(changeSentenceId(sentence_id))
//   }
//




// export const startStoryActions = (storyTitle: string) => (dispatch: Function, getstate: Function) => {
//   console.log(' in startStoryActions', getstate())
//   const storyTitle = getstate().createStory.get('title')
//   dispatch(startStoryRequest())
//    return fetch(enterNewStoryRoute(storyTitle), { method: 'POST',
//   credentials: 'same-origin' })
//     .then((res) => {
//       console.log('in fetch then', res)
//       if (!res.ok) throw Error(res.statusText)
//       return res.json()
//     })
//     .then((data) => {
//       if (!data.newStory) throw Error('No new story received')
//       dispatch(startStorySuccess(data.newStory))
//     })
//     .catch(() => {
//       dispatch(startStoryFailure())
//     })
// }




export const analyzeStoryActions1 = (originalPieceId: number, userBookId: number, pieceNumber: num) => (dispatch: Function, getstate: Function) => {
  //if piece1 does not have length or is empty dispath addPiece1, else if piece2 does not have length dispatch addPiece2, else if is piece3 does not have length make box dissapear.
 // get text from state
  const text = getstate().writeStory.get('piece1')
  console.log('in action text', text)
  const micro_piece_1 = 't';
  const micro_piece_2 = 'f';
  const micro_piece_3 = 'f';
  const completed = 'f';

      //maybe try and use axios.
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
