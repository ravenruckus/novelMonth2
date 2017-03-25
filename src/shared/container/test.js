// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
  message: state.writeStory.get('piece1'),
})

export default connect(mapStateToProps)(Message)
