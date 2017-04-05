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


// export const startNewStoryController = function(fbUserId: number, user_title: string)  {
//
// }
