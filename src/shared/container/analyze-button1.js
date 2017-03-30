// @flow

import { connect } from 'react-redux'

import { analyzeStoryActions1 } from '../action/write-story'
import Button from '../component/analyze-component-button'

const mapStateToProps = (state) => ({
  handleClick: Function,
  label: 'Submit Micro Piece One',
})

const mapDispatchToProps = dispatch => ({
  handleClick: (e, originalPieceId, userBookId, pieceNumber, microPiece) => {
    e.preventDefault()
    dispatch(analyzeStoryActions1(originalPieceId, userBookId, pieceNumber, microPiece)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
