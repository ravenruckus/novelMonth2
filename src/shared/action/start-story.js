// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
// import { ENTER_NEW_STORY } from '../../shared/routes'
import { enterNewStoryRoute } from '../../shared/routes'

// import { helloEndpointRoute } from '../../shared/routes'


export const ADD_TITLE = 'ADD_TITLE'
export const START_STORY_REQUEST = 'START_STORY_REQUEST'
export const START_STORY_SUCCESS = 'START_STORY_SUCCESS'
export const START_STORY_FAILURE = 'START_STORY_FAILURE'

export const addTitle = createAction(ADD_TITLE)
export const startStoryRequest = createAction(START_STORY_REQUEST)
export const startStorySuccess = createAction(START_STORY_SUCCESS)
export const startStoryFailure = createAction(START_STORY_FAILURE)

export const startStoryActions = (storyTitle: string) => (dispatch: Function, getstate: Function) => {
  console.log(' in startStoryActions', getstate())
  const storyTitle = getstate().createStory.get('title')
  dispatch(startStoryRequest())
   return fetch(enterNewStoryRoute(storyTitle), { method: 'POST',
  credentials: 'same-origin' })
    .then((res) => {
      console.log('in fetch then', res)
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.newStory) throw Error('No new story received')
      // console.log(' about to dispatach success', getstate())
      // console.log('data before success', data.newStory)
      dispatch(startStorySuccess(data.newStory))
      console.log(' after success dispatch', getstate())

    })
    .catch(() => {
      dispatch(startStoryFailure())
    })
}
