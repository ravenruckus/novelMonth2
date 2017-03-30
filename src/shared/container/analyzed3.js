// @flow

import { connect } from 'react-redux'

import AnalyzedPiece3 from '../component/analyzed-piece3'
import { changeToneView } from '../action/write-story'
import { changeSentenceId } from '../action/write-story'

const mapStateToProps = state => ({
  analyzed: state.writeStory.get('analyze3'),
  toneView: state.writeStory.get('toneView'),
  sentenceId: state.writeStory.get('sentenceId'),
  analyzedDb: state.writeStory.get('analyzedDb3')
})

const mapDispatchToProps = dispatch => ({
  handleClick: (e, sentence_id) => {
    e.preventDefault()
    dispatch(changeSentenceId(sentence_id)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzedPiece3)
