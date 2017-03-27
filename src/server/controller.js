// @flow
const knex = require('./db');

export const homePage = () => null

export const appIntroPage = () => null

export const createStoryPage = () => ({
  createStory: { title: 'Server-side preloaded title'}
})

export const dashboardPage = () => null

export const workArea = () => null

// export const helloPage = () => ({
//   hello: { message: 'Server-side preloaded message' },
// })
export const helloPage = function() {
   return { hello: { message: 'Server-side preloaded message' }}
  // console.log(hello)
}

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

// export const helloEndpoint = (num: number) => ({
//   serverMessage: `Hello from the server! (received ${num})`,
// })


export const helloEndpoint = function(num: number)  {
  return knex('users')
    .where('id', num)
}

// export const startNewStoryController = function(fbUserId: number) {
//   return knex('users')
//           .where('facebook_id', fbUserId)
//           .then((rows) => {
//             const user_id = rows[0].id
//             const user_title = state.createStory.get('title')
//             const bk_id = 1
//             const insertNewStory = { user_id, user_title, bk_id }
//             knex('user_book')
//             .insert(insertNewStory, '*')
//           })
//
//   //current user passed through from routing, title from state
//   //find user in database
// }

export const startNewStoryController = function(fbUserId: number, user_title: string)  {
//it enters story but doesn't send somehting back so that the action can be successful.
  // knex('users')
  //   .where('facebook_id', fbUserId)
  //     .then((rows) => {
  //       const user_id = rows[0].id
  //       const bk_id = 1
  //       const insertNewStory = { user_id, user_title, bk_id }
  //       console.log('insert new story', insertNewStory)
  //       knex('user_book')
  //        .insert(insertNewStory, '*')
  //        .then((rows) => {
  //          console.log('new story made', rows)
  //          console.log('create story', JSON.stringify(rows[0].user_title))
  //           // return JSON.stringify(rows[0].user_title)
  //          res.json({newStory: JSON.stringify(rows[0].user_title)})
  //        })
  //      .catch((err) => {
  //        console.log(err)
  //      })
  //    })

  // knex('users')
  //   .where('facebook_id', fbUserId)
  //     .then((rows) => {
  //       const user_id = rows[0].id
  //       const bk_id = 1
  //       const insertNewStory = { user_id, user_title, bk_id }
  //       console.log('insert new story', insertNewStory)
  //       knex('user_book')
  //        .insert(insertNewStory, '*')
  //    })
  //    .then((rows) => {
  //      console.log('new story made', rows)
  //      console.log('create story', JSON.stringify(rows[0].user_title))
  //      res.json({newStory: JSON.stringify(rows[0].user_title)})
  //    })
  //    .catch((err) => {
  //      console.log(err)
  //    })
}