// @flow

import React from 'react'
import Helmet from 'react-helmet'


import { APP_NAME } from '../../config'
// import Intro from '../intro.jsx'

const HomePage = () =>
  <div >
    <Helmet
      meta={[
        { name: 'description', content: 'Novel Month' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />

      {/* <Intro /> */}

    </div>


export default HomePage
