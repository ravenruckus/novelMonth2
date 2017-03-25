// @flow

import { connect } from 'react-redux'

import H2 from '../component/h2'

const mapStateToProps = state => ({
  text: state.createStory.get('title'),
  classy: 'userTitle'
})


export default connect(mapStateToProps)(H2) 
