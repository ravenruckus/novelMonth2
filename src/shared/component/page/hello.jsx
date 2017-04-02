// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloButton from '../../container/hello-button'
import Message from '../../container/message'
import Test2 from '../test2.jsx'


const title = 'Hello Page'

const HelloPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
      <h1>{title}</h1>

      <Test2 />
    <Message />
    <HelloButton />
  </div>
// start story, form
  export default HelloPage
