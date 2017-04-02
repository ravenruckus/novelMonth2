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
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'


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



 <Grid className="create-story">
      <PageHeader>{title} - <small>What Title Would You Like to Give Your Story?</small></PageHeader>


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
        <Redirect push to={`/work-area/1/${newStoryId}/1/`}>Test two</Redirect>

       :

        <Row style={{width: '60%', marginLeft: '20%'}}>
          <UserTitle />
          <form>
            <CreateStoryTitleField />
            <StartStoryButton />
          </form>
        </Row>
  }

  </Grid>


  </div>
  export default CreateStory
