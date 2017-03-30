// @flow

import { connect } from 'react-redux'

// import AnalyzedPiece from '../component/analyzed-piece'
// import { changeToneView } from '../action/write-story'

import MicroTwo from '../component/micro-two'

const mapStateToProps = state => ({
  analyzedDb: state.writeStory.get('analyzedDb2'),
  analyzed: state.writeStory.get('analyze2'),
  loading: state.writeStory.get('loading')
})



export default connect(mapStateToProps)(MicroTwo)
