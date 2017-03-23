// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const mapStateToProps = state => ({
  message: state.createStory.get('title'),
})


export default connect(mapStateToProps)(Message)
