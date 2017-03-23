// @flow

import { connect } from 'react-redux'

import { startStoryActions } from '../action/start-story'
import Button from '../component/button'

const mapStateToProps = (state) => ({
  label: 'Initiate New Story'
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    // e.preventDefault()
    dispatch(startStoryActions()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
