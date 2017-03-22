// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  APP_INTRO_PAGE_ROUTE,
  // CREATE_STORY_ROUTE,
  // HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
}
from '../routes'

const Nav = () =>
  <nav>
    <ul>
      {[
        {route: HOME_PAGE_ROUTE, label: 'Home'},
        {route: APP_INTRO_PAGE_ROUTE, label: 'Novel App Page'},
        // {route: CREATE_STORY_ROUTE, label: 'Create Story'},
        {route: HELLO_PAGE_ROUTE, label: 'Say Hello'},
        // { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
        { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>

export default Nav
