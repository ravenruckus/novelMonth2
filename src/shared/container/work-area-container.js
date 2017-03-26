// @flow

import { connect } from 'react-redux'

import WorkArea from '../component/page/work-area'

const mapStateToProps = state => ({

  analyze1State: state.writeStory.get('analyze1'),
  loading: state.writeStory.get('loading'),
})


export default connect(mapStateToProps)(WorkArea)
