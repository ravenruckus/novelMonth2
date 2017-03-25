// @flow

import { connect } from 'react-redux'

import CreateStory from '../component/page/create-story'

const mapStateToProps = state => ({
  newStory: state.createStory.get('newStory')
})


export default connect(mapStateToProps)(CreateStory)
