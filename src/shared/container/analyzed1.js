// @flow

import { connect } from 'react-redux'

import AnalyzedPiece from '../component/analyzed-piece'
import { changeToneView } from '../action/write-story'
import { changeSentenceId } from '../action/write-story'

const mapStateToProps = state => ({
  analyzed: state.writeStory.get('analyze1'),
  toneView: state.writeStory.get('toneView'),
  sentenceId: state.writeStory.get('sentenceId')
})

const mapDispatchToProps = dispatch => ({
  handleClick: (e, sentence_id) => {
    e.preventDefault()
    dispatch(changeSentenceId(sentence_id)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzedPiece)