// @flow

import Helmet from 'react-helmet'
import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
// import Nav from './component/nav'
import HomePage from './component/page/home'
import AppIntro from './component/page/app-intro'
import CreateStory from './container/create-story-container'
import Dashboard from './component/page/dashboard'
import WorkArea from './container/work-area-container'

import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'
import { APP_NAME } from '../shared/config'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  APP_INTRO_PAGE_ROUTE,
  CREATE_STORY_ROUTE,
  DASHBOARD_ROUTE,
  WORK_AREA_ROUTE
} from '../shared/routes'

const App = () =>
  <div className="app">
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    {/* <Nav /> */}
    <img className="header-img" src="http://media.aliciagyori.com/raventop.png" alt="alicia" />
    <img className="header-img-mobile" src="https://s3-us-west-2.amazonaws.com/images.aliciagyori.com/raventop-mobile3.png" />

    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={APP_INTRO_PAGE_ROUTE} render={() => <AppIntro />} />
      <Route path={CREATE_STORY_ROUTE} render={() => <CreateStory />} />
      <Route path={DASHBOARD_ROUTE} render={({match}) => <Dashboard match={match} />} />
      <Route path={WORK_AREA_ROUTE} render={({match}) => <WorkArea match={match} />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
    </Switch>

    <img className="footer-img-mobile" src="https://s3-us-west-2.amazonaws.com/images.aliciagyori.com/ravenbottom-mobile.png" alt="raven footer" />
    <img className="footer-img" src="http://media.aliciagyori.com/ravenbottom.png" alt="raven footer" />
   </div>


export default App
