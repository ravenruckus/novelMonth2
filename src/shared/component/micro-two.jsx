// @flow

import React from 'react'

import MicroPieceOneDB2 from './micro-piece-two-db-dirty'
import EnterStory2 from '../container/enter-story2'
import AnalyzeButton2 from '../container/analyze-button2'
import Analyzed2 from '../container/analyzed2'
import MicroTwoOrig from './micro-two-orig-dirty'
import { Col } from 'react-bootstrap'

type Props = {
  analyzedDb: array,
  analyzed: array,
  loading: string,

}

const MicroTwo = ({originalPieceId, userBookId, pieceNumber, loading, analyzedDb, analyzed }: Props) =>

<div>
  <Col sm={12} className="modules">
    <MicroTwoOrig originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
  </Col>

  <Col className="modules" sm={12} >
  <h3>Your Story</h3>

   {/* { loading ?
     <h3>Analyzing your story now.</h3>
      :
     <span></span>
    } */}

    {
      analyzed.length ?
       <Analyzed2 />
      :

      <MicroPieceOneDB2 originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />

    }
  </Col>



      <Col  className="modules" sm={12}>
      <EnterStory2 />
      <AnalyzeButton2 microPiece={2} originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
      </Col>

</div>




export default MicroTwo
