// @flow

import { connect } from 'react-redux'

import { startStoryActions } from '../action/start-story'
import Button from '../component/button'

const mapStateToProps = (state) => ({
  label: 'Initiate New Story',
  enterTitle: state.createStory.get('title')
})

const mapDispatchToProps = dispatch => ({
  handleClick: (e) => {
    e.preventDefault()
    dispatch(startStoryActions()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
