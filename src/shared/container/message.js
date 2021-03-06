// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
  newStory: state.hello.get('newStory'),
})

export default connect(mapStateToProps)(Message)
