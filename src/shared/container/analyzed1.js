// @flow

import { connect } from 'react-redux'

import AnalyzedPiece from '../component/analyzed-piece'

const mapStateToProps = state => ({
  analyzed: state.writeStory.get('analyze1'),
})

// const mapDispatchToProps = dispatch => ({
//   handleClick: () => { dispatch(showTones()) },
// })


export default connect(mapStateToProps)(AnalyzedPiece)
