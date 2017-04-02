import React from 'react'
import Helmet from 'react-helmet'

import EnterStory from '../../container/enter-story'
import AnalyzeButton1 from '../../container/analyze-button1'
import Test from '../../container/test'
import Analyzed1 from '../../container/analyzed1'

import MicroOne from '../../container/micro-one-container'
import MicroTwo from '../../container/micro-two-container'
import MicroThree from '../../container/micro-three-container'

import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
// import  LogoutButton  from '../logout-button.jsx'

import Nav from '../nav'



const title = 'Work Area'
const workLogout = 'work-logout'

type Props = {
  analyze1State: array,
  loading: string,
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
    {/* <Nav /> */}

    <Grid className="workarea">
      <PageHeader>{title} <small>The Wizard of Oz - The Cyclone</small></PageHeader>
      <div className="instructions">
        <ul>
          <li>Click on a sentence to see how likely it is to contain the listed emotions.</li>
          <li>Read the tips in the grey sidebar for ideas on how to approach each section of your story.</li>
      </ul>
    </div>

    <Row className="show-grid micro-piece micro-piece1">
     <h2>Micro Piece One</h2>
     <MicroOne originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />
    </Row>

    <Row className="show-grid micro-piece micro-piece2">
      <h2>Micro Piece Two</h2>
      <MicroTwo originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />
   </Row>

    <Row className="show-grid micro-piece micro-piece3">
      <h2>Micro Piece Three</h2>
      <MicroThree originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} />
    </Row>

    <LogoutButton classStyle={workLogout}/>

   </Grid>


{/*
    <h1>Micro Piece Three</h1>

    <MicroThree originalPieceId={match.params.originalPieceId} userBookId={match.params.userBookId} pieceNumber={match.params.pieceNumber} /> */}
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
