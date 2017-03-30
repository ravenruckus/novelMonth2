// @flow

import React from 'react'

import MicroPieceOneDB from './micro-piece-one-db'
import EnterStory from '../container/enter-story'
import AnalyzeButton1 from '../container/analyze-button1'
import Analyzed1 from '../container/analyzed1'
import MicroOneOrig from './micro-one-orig-dirty'

type Props = {
  analyzedDb: array,
  analyzed: array,
  loading: string,

}

const MicroOne = ({originalPieceId, userBookId, pieceNumber, loading, analyzedDb, analyzed }: Props) =>

<div>

    <MicroOneOrig originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />


    { loading ?
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
      <AnalyzeButton1 microPiece={1} originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
    </div>






</div>




export default MicroOne
