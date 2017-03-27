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
  startNewStoryController,
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
  WORK_AREA_ROUTE,
  ENTER_NEW_STORY,
  enterNewStoryRoute,
  workAreaSingleRoute,
  analyzePieceRoute
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

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const tone_analyzer = new ToneAnalyzerV3({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  version_date: '2016-05-19'
});

const Analyze = function(newText) {
  return new Promise((resolve, reject) => {
    tone_analyzer.tone({ text: newText}, function(err, tone) {
    if (err) {
      console.log(err);
    } else {
    resolve(JSON.stringify(tone, null, 2));
  }
  })
 })
}



export default (app: Object) => {
  // const token = ''


  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.use(passport.initialize());
  app.use(passport.session());

  // passport.serializeUser((object, done) => {
  //   console.log("Serialize User", {token: object})
  //   done(null, {token: object.token})
  // })

  passport.serializeUser((object, done) => {
  console.log("Serialize User", {token: object})

  const facebook_id = object.profile.id;
  const facebook_token = object.token;

  const insertUser = {facebook_token: object.token, name: object.profile.displayName, facebook_id: object.profile.id }

  knex('users')
    .where('facebook_id', facebook_id)
    .then((userObj) => {
      if(userObj.length === 0) {
        knex('users')
        .insert(insertUser, '*')
        .then((rows) => {
          done(null, {token: object.token, facebook_id: object.profile.id})
        })
        .catch((err) => {
          console.log(err)
        })
      }
      else {
        knex('users')
          .where('facebook_id', facebook_id)
          .update('facebook_token', facebook_token)
          .then((response) =>{
            done(null, {token: object.token, facebook_id: object.profile.id})
          })
          .catch((err) => {
            console.log(err)
          })
      }

    })
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
   console.log(req.session);
   const fbUserId = req.session.passport.user.facebook_id
   res.send(renderApp(req.url, createStoryPage()))
 })

 app.post(enterNewStoryRoute(), ensureAuthenticated, (req, res) => {
   const fbUserId = req.session.passport.user.facebook_id
   const user_title = req.params.storyTitle

  //  res.json(startNewStoryController(fbUserId, user_title))

    knex('users')
      .where('facebook_id', fbUserId)
        .then((rows) => {
          const user_id = rows[0].id
          const bk_id = 1
          const insertNewStory = { user_id, user_title, bk_id }
          knex('user_book')
           .insert(insertNewStory, '*')
           .then((rows) => {
             res.json({newStory: JSON.stringify(rows[0].user_title)})
           })
         .catch((err) => {
           console.log(err)
         })
       })
     })

 // app.post(analyzePieceRoute(), (req, res) => {
 //  //  console.log(req.params)
 //   const original_piece_id = req.params.originalPieceId
 //   const user_book_id = req.params.userBookId
 //   const piece_num = req.params.pieceNumber
 //   const text = req.params.text
 //   const micro_piece_1 = req.params.micro_piece_1
 //   const micro_piece_2 = req.params.micro_piece_2
 //   const micro_piece_3 = req.params.micro_piece_3
 //   const completed = req.params.completed
 //
 //   Analyze(text)
 //    .then((obj) => {
 //
 //      const data = obj
 //
 //      const insertPiece = {original_piece_id, user_book_id, data, piece_num, micro_piece_1, micro_piece_3, completed }
 //      // console.log('insert piece', insertPiece)
 //      return knex('user_pieces')
 //       .insert(insertPiece, '*')
 //    })
 //    .then((rows) => {
 //      const parsedData = JSON.parse(rows[0].data)
 //      console.log('trying to get an object', typeof parsedData)
 //      console.log('in then after insert', typeof rows[0].data)
 //      res.send({data: parsedData})
 //  })
 //    .catch((err) => {
 //      console.log(err)
 //    })
 //  })

 app.post(analyzePieceRoute(), (req, res) => {
  //  console.log(req.params)
   const original_piece_id = req.params.originalPieceId
   const user_book_id = req.params.userBookId
   const piece_num = req.params.pieceNumber
   const text = req.params.text
   const micro_piece_1 = req.params.micro_piece_1
   const micro_piece_2 = req.params.micro_piece_2
   const micro_piece_3 = req.params.micro_piece_3
   const completed = req.params.completed

   Analyze(text)
    .then((obj) => {

      const initialData = JSON.parse(obj)
      const sentences = initialData.sentences_tone

      const preData = []
      for(const t of sentences) {

        let color = 'white'

         if (t.tone_categories[0].tones[0].score > .5) {
           color = 'red'
         }
         if (t.tone_categories[0].tones[1].score > .5) {
           color = 'yellow'
         }
         if (t.tone_categories[0].tones[2].score > .5) {
           color = 'green'
         }
         if (t.tone_categories[0].tones[3].score > .5) {
           color = 'pink'
         }
         if (t.tone_categories[0].tones[4].score > .5) {
           color = 'blue'
         }
        preData.push({text: t.text, sentence_id: t.sentence_id, tones: t.tone_categories[0], color: color})
      }
      const data = JSON.stringify(preData)

      const insertPiece = {original_piece_id, user_book_id, data, piece_num, micro_piece_1, micro_piece_3, completed }
      // console.log('insert piece', insertPiece)
      return knex('user_pieces')
       .insert(insertPiece, '*')
    })
    .then((rows) => {
      // const parsedData = JSON.parse(rows[0].data)
      // console.log('trying to get an object', typeof parsedData)
      // console.log('in then after insert', typeof rows[0].data)
      res.send({data: JSON.parse(rows[0].data)})
  })
    .catch((err) => {
      console.log(err)
    })
  })



 // app.post(analyzePieceRoute(), (req, res) => {
 //  //  console.log(req.params)
 //   const original_piece_id = req.params.originalPieceId
 //   const user_book_id = req.params.userBookId
 //   const piece_num = req.params.pieceNumber
 //   const data = req.params.text
 //   const micro_piece_1 = req.params.micro_piece_1
 //   const micro_piece_2 = req.params.micro_piece_2
 //   const micro_piece_3 = req.params.micro_piece_3
 //   const completed = req.params.completed
 //
 //
 //    const insertPiece = {original_piece_id, user_book_id, data, piece_num, micro_piece_1, micro_piece_3, completed }
 //      // console.log('insert piece', insertPiece)
 //      knex('user_pieces')
 //       .insert(insertPiece, '*')
 //    .then((rows) => {
 //      res.json({writeStory: JSON.stringify(rows[0].data)})
 //  })
 //    .catch((err) => {
 //      console.log(err)
 //    })
 //  })


 app.get(DASHBOARD_ROUTE, ensureAuthenticated, (req, res) => {
   res.send(renderApp(req.url, dashboardPage()))
 })

 // app.get(WORK_AREA_ROUTE, ensureAuthenticated, (req, res) => {
 //   res.send(renderApp(req.url, workArea()))
 // })

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
        res.json({serverMessage: JSON.stringify(rows[0].name)})
      })
  })


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
