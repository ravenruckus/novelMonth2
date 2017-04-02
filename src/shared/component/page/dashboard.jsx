import React from 'react'
import Helmet from 'react-helmet'

// import HelloAsyncButton from '../../container/hello-async-button'
// import MessageAsync from '../../container/message-async'
import analyzePieceRoute from '../../routes'
import WORK_AREA_ROUTE from '../../routes'
import CREATE_STORY_ROUTE from '../../routes'
import {Link, Redirect, NavLink } from 'react-router-dom'
// import Nav from '../nav'
import DashboardNav from '../dashboard-nav'




const title = 'Dashboard'
const origPiece = 1
const userBk = 1

const Dashboard = ({match}) =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Dashboard'},
        { property: 'og:title', content: title },
      ]}
    />
    <p>url {match.url}</p>


    <h1>{title}</h1>
    <p>This is the dashboard where you can view your story in progress and chose a section to work on.</p>


    {/* <Link to="/work-area" replace > Test </Link> */}

    <DashboardNav />

  <Link to="/work-area/1/1/1/" activeStyle={{ color: 'limegreen' }} exact> To Work Area </Link>
    {/* <ul>
      {[
        {route: WORK_AREA_ROUTE_TEST, label: 'Section One'}
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul> */}
    {/* <NavLink to= {WORK_AREA_ROUTE}>nav link</NavLink> */}

    {/* <li>
        <Link path={WORK_AREA_ROUTE} activeStyle={{ color: 'limegreen' }} exact>Work Area</Link>
    </li> */}

  </div>

export default Dashboard
