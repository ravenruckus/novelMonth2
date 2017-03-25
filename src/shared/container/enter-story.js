// @flow

import { connect } from 'react-redux'

// import { sayHello } from '../action/hello'
import FormText from '../component/form-text'
import { addPiece1 } from '../action/write-story'

const mapStateToProps = (state) => {
  return {
  classy: 'enterStory',
  sectionTitle: 'writeStory',
  controlLabel: 'Write Story',
  type: 'text',
  componentClass: 'textarea',
  title: state.writeStory.get('piece1')
 }
}

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    dispatch(addPiece1(e.target.value))
   },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormText)
