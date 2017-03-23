// @flow

import { connect } from 'react-redux'

// import { sayHello } from '../action/hello'
import FormText from '../component/form-text'
import { addTitle } from '../action/start-story'

const mapStateToProps = (state) => {
  console.log(state)
  return {
  sectionTitle: 'storyText',
  controlLabel: 'Story Text',
  type: 'text',
  title: state.createStory.get('title')
 }
}

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    console.log(e.target.value)
    dispatch(addTitle(e.target.value))
   },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormText)
