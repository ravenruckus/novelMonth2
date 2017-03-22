// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = 'Introduction to application.'
const AppIntro = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Introduction to novel application and login' },
        { property: 'og:title', content: 'Test Title' },
      ]}
    />
    <h1>Test</h1>
      <p>This is an app that helps you write a novel in one month.</p>
    </div>

export default AppIntro
