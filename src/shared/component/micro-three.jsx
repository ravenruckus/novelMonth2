// @flow

import React from 'react'

import MicroPieceOneDB3 from './micro-piece-three-db-dirty'
import EnterStory3 from '../container/enter-story3'
import AnalyzeButton3 from '../container/analyze-button3'
import Analyzed3 from '../container/analyzed3'
import MicroThreeOrig from './micro-three-orig-dirty'
import { Col } from 'react-bootstrap'

type Props = {
  analyzedDb: array,
  analyzed: array,
  loading: string,

}

const MicroThree = ({originalPieceId, userBookId, pieceNumber, loading, analyzedDb, analyzed }: Props) =>

<div>

    <MicroThreeOrig originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />


    <h3>Your Story</h3>

    {
      analyzed.length ?
      <Col className="modules" sm={12} >
       <Analyzed3 />
      </Col>
      :
      <Col  className="modules" sm={12} >
        <MicroPieceOneDB3 originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
      </Col>
    }

    <div>
      <Col  className="modules" sm={12}>
      <EnterStory3 />
      <AnalyzeButton3 microPiece={3} originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
    </Col>
    </div>


  </div>










export default MicroThree
