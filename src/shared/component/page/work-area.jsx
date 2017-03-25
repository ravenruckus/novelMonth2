import React from 'react'
import Helmet from 'react-helmet'

// import HelloAsyncButton from '../../container/hello-async-button'
// import MessageAsync from '../../container/message-async'

import EnterStory from '../../container/enter-story'
import AnalyzeButton1 from '../../container/analyze-button1'
import Test from '../../container/test'


const title = 'Work Area'


const WorkArea = ({ match }) =>
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
    <p>{match.params.originalPieceId}</p>
    <p>{match.params.userBookId}</p>
    <p>{match.params.pieceNumber}</p>


    <Test />
    <EnterStory />
    <AnalyzeButton1 originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />
  </div>

export default WorkArea
