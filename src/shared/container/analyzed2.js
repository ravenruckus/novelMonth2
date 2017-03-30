// @flow

import { connect } from 'react-redux'

import AnalyzedPiece2 from '../component/analyzed-piece2'
import { changeToneView } from '../action/write-story'
import { changeSentenceId } from '../action/write-story'

const mapStateToProps = state => ({
  analyzed: state.writeStory.get('analyze2'),
  toneView: state.writeStory.get('toneView'),
  sentenceId: state.writeStory.get('sentenceId'),
  analyzedDb: state.writeStory.get('analyzedDb2')
})

const mapDispatchToProps = dispatch => ({
  handleClick: (e, sentence_id) => {
    e.preventDefault()
    dispatch(changeSentenceId(sentence_id)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzedPiece2)
