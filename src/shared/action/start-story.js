// @flow

// import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { ENTER_NEW_STORY } from '../../shared/routes'
// import { enterNewStoryRoute } from '../../shared/routes'

// import { helloEndpointRoute } from '../../shared/routes'


export const ADD_TITLE = 'ADD_TITLE'
export const START_STORY_REQUEST = 'START_STORY_REQUEST'
export const START_STORY_SUCCESS = 'START_STORY_SUCCESS'
export const START_STORY_FAILURE = 'START_STORY_FAILURE'

export const addTitle = createAction(ADD_TITLE)
export const startStoryRequest = createAction(START_STORY_REQUEST)
export const startStorySuccess = createAction(START_STORY_SUCCESS)
export const startStoryFailure = createAction(START_STORY_FAILURE)

export const startStoryActions = (storyTitle: string) => (dispatch: Function) => {
  console.log(' in startStoryActions')
  dispatch(startStoryRequest())
   return fetch(ENTER_NEW_STORY, { method: 'POST',
  credentials: 'same-origin' })
    .then((res) => {
      console.log('in fetch then')
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.newStory) throw Error('No new story received')
      dispatch(startStorySuccess(data.newStory))
    })
    .catch(() => {
      dispatch(startStoryFailure())
    })
}
//createAction() pass string to type as string, but payload is added on dispatch
