import React from 'react'
import Helmet from 'react-helmet'

// import HelloAsyncButton from '../../container/hello-async-button'
// import MessageAsync from '../../container/message-async'

const title = 'Dashboard'

const Dashboard = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Dashboard'},
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <p>This is the dashboard where you can view your story in progress and chose a section to work on.</p>
    {/* <MessageAsync />
    <HelloAsyncButton /> */}
  </div>

export default Dashboard
