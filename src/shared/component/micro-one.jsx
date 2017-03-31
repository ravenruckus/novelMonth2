// @flow

import React from 'react'

import MicroPieceOneDB from './micro-piece-one-db-dirty'
import EnterStory from '../container/enter-story'
import AnalyzeButton1 from '../container/analyze-button1'
import Analyzed1 from '../container/analyzed1'
import MicroOneOrig from './micro-one-orig-dirty'
import { Col } from 'react-bootstrap'


type Props = {
  analyzedDb: array,
  analyzed: array,
  loading: string,

}

const MicroOne = ({originalPieceId, userBookId, pieceNumber, loading, analyzedDb, analyzed }: Props) =>

<div>

  <Col className="modules" sm={12}>
    <MicroOneOrig originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
  </Col>

    <h3>Your Story</h3>
    {/* { loading ?
     <h3>Analyzing your story now.</h3>
      :
     <span></span>
    } */}

    {
      analyzed.length ?
      <Col className="modules" sm={12} >
       <Analyzed1 />
      </Col>

      :
      <Col  className="modules" sm={12} >
       <MicroPieceOneDB originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
     </Col>

    }

    <Col  className="modules" sm={12}>
      <EnterStory />
      <AnalyzeButton1 microPiece={1} originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
    </Col>

</div>




export default MicroOne
