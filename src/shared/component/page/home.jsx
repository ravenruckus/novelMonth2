// @flow

import React from 'react'
import Helmet from 'react-helmet'


import { APP_NAME } from '../../config'
import Intro2 from '../intro2.jsx'

const HomePage = () =>
  <div >
    <Helmet
      meta={[
        { name: 'description', content: 'Novel Month' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />

      <Intro2 />

    </div>


export default HomePage
