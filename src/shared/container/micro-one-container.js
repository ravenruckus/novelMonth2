// @flow

import { connect } from 'react-redux'

// import AnalyzedPiece from '../component/analyzed-piece'
// import { changeToneView } from '../action/write-story'

import MicroOne from '../component/micro-one'

const mapStateToProps = state => ({
  analyzedDb: state.writeStory.get('analyzedDb1'),
  analyzed: state.writeStory.get('analyze1'),
  loading: state.writeStory.get('loading')
})



export default connect(mapStateToProps)(MicroOne)
