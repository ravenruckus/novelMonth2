import React from 'react'
import Helmet from 'react-helmet'

import EnterStory from '../../container/enter-story'
import AnalyzeButton1 from '../../container/analyze-button1'
import Test from '../../container/test'
import Analyzed1 from '../../container/analyzed1'

import MicroOne from '../../container/micro-one-container'

// import MicroPieceOneDB from '../../component/micro-piece-one-db'


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

    <MicroOne originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />

    {/* <p>originalPieceId{match.params.originalPieceId}</p>
    <p> userbookid {match.params.userBookId}</p>
    <p> pieceNumber {match.params.pieceNumber}</p> */}

    {/* <MicroPieceOneDB originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber}/> */}


    {/* <div>
      <EnterStory />
      <AnalyzeButton1 originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />
    </div> */}

     {/* { loading ?
      <h3>Analyzing your story now.</h3>
       :
      <h3></h3>
    } */}

    {/* <Test /> */}

    {/* { analyze1State.length ?
    <div>
      <h2>Analyzed</h2>
      <Analyzed1 />
    </div>
      :
    <div>
      <EnterStory />
      <AnalyzeButton1 originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />
    </div>
    } */}

    {/* <GetMicroOne userBookId={match.params.userBookId}/> */}

  </div>

export default WorkArea
