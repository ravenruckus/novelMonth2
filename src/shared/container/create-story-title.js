// @flow

import { connect } from 'react-redux'

// import { sayHello } from '../action/hello'
import FormText from '../component/form-text'
import { addTitle } from '../action/start-story'

const mapStateToProps = (state) => {
  return {
  classy: '',
  sectionTitle: 'storyText',
  controlLabel: 'Story Text',
  type: 'text',
  title: state.createStory.get('title'),
  componentClass: 'input',
 }
}

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    dispatch(addTitle(e.target.value))
   },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormText)
