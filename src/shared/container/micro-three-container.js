// @flow

import { connect } from 'react-redux'

// import AnalyzedPiece from '../component/analyzed-piece'
// import { changeToneView } from '../action/write-story'

import MicroThree from '../component/micro-three'

const mapStateToProps = state => ({
  analyzedDb: state.writeStory.get('analyzedDb3'),
  analyzed: state.writeStory.get('analyze3'),
  loading: state.writeStory.get('loading')
})



export default connect(mapStateToProps)(MicroThree)
