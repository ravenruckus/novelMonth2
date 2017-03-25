// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { DASHBOARD_ROUTE } from '../../routes'
import {Link, Redirect } from 'react-router-dom'

import CreateStoryTitleField from '../../container/create-story-title'
import StartStoryButton from '../../container/start-story-button'
import UserTitle from '../../container/display-story-info'



type Props = {
  newStory: string,
}

const title = 'Create A Story'


const CreateStory = ({ newStory }: Props) =>
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
      <p>Your new story: {newStory}</p>

      { newStory ?
        // <div>
        //    <h2> Go to Dashboard</h2>
        //    <p>{newStory}</p>
        //    <NavLink to={DASHBOARD_ROUTE} activeStyle={{ color: 'limegreen' }} exact>Dashboard</NavLink>
        // </div>
        <Redirect push to="/dashboard">Test two</Redirect>
       :
        <div>
          <UserTitle />
          <form>
            <CreateStoryTitleField />
            <StartStoryButton />
          </form>
        </div>
  }

  </div>
  export default CreateStory
