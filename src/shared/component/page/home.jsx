// @flow

import React from 'react'
import Helmet from 'react-helmet'


import { APP_NAME } from '../../config'
import Test2 from '../test2.jsx'
// import Intro2 from '../intro2.jsx'

const HomePage = () =>
  <div >
    <Helmet
      meta={[
        { name: 'description', content: 'Novel Month' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />

      {/* <Intro2 /> */}
      <Test2 />

    </div>


export default HomePage
