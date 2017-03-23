// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

// import HelloButton from '../../container/hello-button'
// import Message from '../../container/message'
import CreateStoryTitleField from '../../container/create-story-title'
import StoryInfo from '../../container/create-story-info'
import StartStoryButton from '../../container/start-story-button'


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
      <form>
        <CreateStoryTitleField />
        <StartStoryButton />
      </form>
     <StoryInfo />
    {/* <HelloButton />  */}
  </div>
// start story, form
  export default CreateStory
