// @flow

import React from 'react'
import Helmet from 'react-helmet'

// import HelloButton from '../../container/hello-button'
// import Message from '../../container/message'

const title = 'Create A Story'

const CreateStory = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Create a new story' },
        { property: 'og:title', content: title },
      ]}
    />
      <h1>{title}</h1>
      <p>This is where you create a story</p>
    {/* <Message />
    <HelloButton /> */}
  </div>
// start story, form
  export default CreateStory
