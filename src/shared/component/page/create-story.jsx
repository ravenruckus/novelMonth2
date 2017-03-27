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
  newStoryId: number,
}

const title = 'Create A Story'


const CreateStory = ({ newStory, newStoryId }: Props) =>
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
      //   <div>
      //   <h1>New story started {newStory}</h1>
      //   <h2>Story id {newStoryId} </h2>
      // </div>
        <Redirect push to={`/work-area/1/${newStoryId}/1/${newStory}`}>Test two</Redirect>

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
