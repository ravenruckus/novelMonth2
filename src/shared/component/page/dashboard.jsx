import React from 'react'
import Helmet from 'react-helmet'

// import HelloAsyncButton from '../../container/hello-async-button'
// import MessageAsync from '../../container/message-async'
import workAreaSingleRoute from '../../routes'

const title = 'Dashboard'
const origPiece = 1
const userBk = 1

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

    <ul>
      {[
        {route: workAreaSingleRoute(1, 1), label: 'Section One'}
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>

  </div>

export default Dashboard
