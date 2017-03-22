import React from 'react'
import Helmet from 'react-helmet'

// import HelloAsyncButton from '../../container/hello-async-button'
// import MessageAsync from '../../container/message-async'

const title = 'Work Area'

const WorkArea = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'This is where you work on a section of your story'},
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <p>This is where you work on a section of the story.</p>
    {/* <MessageAsync />
    <HelloAsyncButton /> */}
  </div>

export default WorkArea
