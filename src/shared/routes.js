// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE ='/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'
export const LOGIN_PAGE_ROUTE = '/login/facebook'
export const FACEBOOK_CALLBACK ='/login/facebook/callback'
export const APP_INTRO_PAGE_ROUTE = '/app-intro'
export const CREATE_STORY_ROUTE ='/create-story'
export const DASHBOARD_ROUTE = '/dashboard'
export const WORK_AREA_ROUTE ='/work-area'
export const ENTER_NEW_STORY = '/api/enter-new-story'

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/api/hello/${num || ':num'}`

// export const enterNewStoryRoute = (storyTitle: string) =>`/api/enter-new-story/${storyTitle}`
