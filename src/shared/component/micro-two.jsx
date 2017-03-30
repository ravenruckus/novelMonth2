// @flow

import React from 'react'

// import MicroPieceOneDB from './micro-piece-one-db'
import EnterStory2 from '../container/enter-story2'
import AnalyzeButton2 from '../container/analyze-button2'
import Analyzed2 from '../container/analyzed2'
import MicroTwoOrig from './micro-two-orig-dirty'

type Props = {
  analyzedDb: array,
  analyzed: array,
  loading: string,

}

const MicroTwo = ({originalPieceId, userBookId, pieceNumber, loading, analyzedDb, analyzed }: Props) =>

<div>

    <MicroTwoOrig originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />

    <Analyzed2 />

    <div>
    <EnterStory2 />
    <AnalyzeButton2 microPiece={2} originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
    </div>


    {/* { loading ?
     <h3>Analyzing your story now.</h3>
      :
     <span></span>
    }

    {
      analyzed.length ?
      <Analyzed1 />

      :
      <MicroPieceOneDB originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />

    }

    <div>
      <EnterStory />
      <AnalyzeButton1 originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
    </div>
 */}





</div>




export default MicroTwo