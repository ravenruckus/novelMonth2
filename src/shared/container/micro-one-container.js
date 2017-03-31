// @flow

import { connect } from 'react-redux'

import MicroOne from '../component/micro-one'

const mapStateToProps = state => ({
  analyzedDb: state.writeStory.get('analyzedDb1'),
  analyzed: state.writeStory.get('analyze1'),
  loading: state.writeStory.get('loading')
})



export default connect(mapStateToProps)(MicroOne)
