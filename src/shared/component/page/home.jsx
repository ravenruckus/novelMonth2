// @flow

import React from 'react'
import Helmet from 'react-helmet'


import { APP_NAME } from '../../config'
import Intro from '../intro.jsx'

const HomePage = () =>
  <div >
    <Helmet
      meta={[
        { name: 'description', content: 'Novel Month' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />

      <Intro />

    </div>

  //link to intro to app and login
  //make duplicate but add button for login, for inro to app and login

export default HomePage
