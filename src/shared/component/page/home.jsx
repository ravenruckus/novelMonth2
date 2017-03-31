// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'
import Test from '../test.jsx'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    {/* <h1>{APP_NAME}</h1>
      <p>Testing changes!!!</p> */}
      <Test />
    </div>

  //link to intro to app and login
  //make duplicate but add button for login, for inro to app and login

export default HomePage
