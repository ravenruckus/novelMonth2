// @flow

import React from 'react'

import MicroPieceOneDB3 from './micro-piece-three-db-dirty'
import EnterStory3 from '../container/enter-story3'
import AnalyzeButton3 from '../container/analyze-button3'
import Analyzed3 from '../container/analyzed3'
import MicroThreeOrig from './micro-three-orig-dirty'

type Props = {
  analyzedDb: array,
  analyzed: array,
  loading: string,

}

const MicroThree = ({originalPieceId, userBookId, pieceNumber, loading, analyzedDb, analyzed }: Props) =>

<div>

    <MicroThreeOrig originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />


    {/* <MicroPieceOneDB3 originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />

    <Analyzed3 />

    <div>
      <EnterStory3 />
      <AnalyzeButton3 microPiece={3} originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
      </div>
    </div> */}




    {
      analyzed.length ?
      <Analyzed3 />

      :
      <MicroPieceOneDB3 originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />

    }

    <div>
      <EnterStory3 />
      <AnalyzeButton3 microPiece={3} originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
    </div>


  </div>










export default MicroThree
