// @flow
require('dotenv').config();
import passport from 'passport'
import { Strategy } from 'passport-facebook'
const knex = require('./db');

import {
  homePage,
  helloPage,
  helloAsyncPage,
  helloEndpoint,
  appIntroPage,
  createStoryPage,
  dashboardPage,
  workArea
} from './controller'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  FACEBOOK_CALLBACK,
  helloEndpointRoute,
  APP_INTRO_PAGE_ROUTE,
  CREATE_STORY_ROUTE,
  DASHBOARD_ROUTE,
  WORK_AREA_ROUTE
} from '../shared/routes'

import renderApp from './render-app'


passport.use(new Strategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: FACEBOOK_CALLBACK,
  enableProof: true
    },
    function onSuccessfulLogin(token, refreshToken, profile, done) {
      done(null, {token, profile});
    }
));

export default (app: Object) => {

  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((object, done) => {
    console.log("Serialize User", {token: object})
    done(null, {token: object.token})
  })

  passport.deserializeUser((object, done) => {
  console.log("Deserialize User", object)
  done(null, object)
  })

  app.get(LOGIN_PAGE_ROUTE, passport.authenticate('facebook'))

  app.get(FACEBOOK_CALLBACK,
    passport.authenticate('facebook', { successRedirect:
    HELLO_PAGE_ROUTE, failureRedirect: HOME_PAGE_ROUTE }))

  const ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
   res.redirect(HOME_PAGE_ROUTE);
  }

  // app.get('/users', (req, res) => {
  //   knex('users')
  //     .where('id', 1)
  //     .then((rows) => {
  //       res.send(rows)
  //     })
  // })

  app.get('/logout', function(req, res) {
  req.logout();

  res.redirect(HOME_PAGE_ROUTE);
 })

 app.get(APP_INTRO_PAGE_ROUTE, (req, res) => {
   res.send(renderApp(req.url, appIntroPage()))
 })

 app.get(CREATE_STORY_ROUTE, ensureAuthenticated, (req, res) => {
   res.send(renderApp(req.url, createStoryPage()))
 })

 app.get(DASHBOARD_ROUTE, ensureAuthenticated, (req, res) => {
   res.send(renderApp(req.url, dashboardPage()))
 })

 app.get(WORK_AREA_ROUTE, ensureAuthenticated, (req, res) => {
   res.send(renderApp(req.url, workArea()))
 })

 app.get(HELLO_PAGE_ROUTE, (req, res) => {
   res.send(renderApp(req.url, helloPage()))
 })

 // to protect pages take out of front end nav
 app.get(HELLO_ASYNC_PAGE_ROUTE, ensureAuthenticated, (req, res) => {
    res.send(renderApp(req.url, helloAsyncPage()))
 })

 app.get(helloEndpointRoute(), (req, res) => {
      helloEndpoint(req.params.num)
      .then((rows) => {
        console.log(JSON.stringify(rows[0].name))
        res.json({serverMessage: JSON.stringify(rows[0].name)})
      })
  })

// app.get(helloEndpointRoute(), (req, res) => {
//    req.params.num
// })

 app.get('/500', () => {
   throw Error('Fake Internal Server Error')
 })

 app.get('*', (req, res) => {
   res.status(404).send(renderApp(req.url))
 })

  // eslint-disable-next-line no-unused-vars
 app.use((err, req, res, next) => {
   // eslint-disable-next-line no-console
   console.error(err.stack)
   res.status(500).send('Something went wrong!')
 })
}
