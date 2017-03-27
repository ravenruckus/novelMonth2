// @flow

import React from 'react'

import MicroPieceOneDB from './micro-piece-one-db'
import EnterStory from '../container/enter-story'
import AnalyzeButton1 from '../container/analyze-button1'
import Analyzed1 from '../container/analyzed1'

type Props = {
  analyzedDb: [],
  analyzed: [],
  loading: '',
}

const MicroOne = ({originalPieceId, userBookId, pieceNumber, analyzedDb, analyzed, loading }: Props) =>

<div>

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
      <AnalyzeButton1 originalPieceId={originalPieceId} userBookId={userBookId} pieceNumber={pieceNumber} />
    </div>






</div>




export default MicroOne
