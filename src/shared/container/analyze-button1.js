// @flow

import { connect } from 'react-redux'

import { analyzeStoryActions1 } from '../action/write-story'
import Button from '../component/analyze-component-button'

const mapStateToProps = (state) => ({
  handleClick: Function,
  label: 'Submit Micro Piece One',
  // enterText: state.writeStory.get('piece1')
})

const mapDispatchToProps = dispatch => ({
  handleClick: (e, originalPieceId, userBookId, pieceNumber) => {
    e.preventDefault()
    dispatch(analyzeStoryActions1(originalPieceId, userBookId, pieceNumber)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
