import React from 'react'
import Helmet from 'react-helmet'

// import HelloAsyncButton from '../../container/hello-async-button'
// import MessageAsync from '../../container/message-async'

import EnterStory from '../../container/enter-story'
import AnalyzeButton1 from '../../container/analyze-button1'
import Test from '../../container/test'
import Analyzed1 from '../../container/analyzed1'


const title = 'Work Area'

type Props = {
  analyze1State: [],
  loading: ''
}

const WorkArea = ({ match, analyze1State, loading }) =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'This is where you work on a section of your story'},
        { property: 'og:title', content: title },
      ]}
    />

    <h1>{title}</h1>
    <h2>{match.params.title}</h2>

     { loading ?
      <h3>Analyzing your story now.</h3>
       :
      <h3></h3>
    }

    {/* <Test /> */}

    { analyze1State.length ?
    <div>
      <h2>Analyzed</h2>
      <Analyzed1 />
    </div>
      :
    <div>
      <EnterStory />
      <AnalyzeButton1 originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />
    </div>
    }

  </div>

export default WorkArea
