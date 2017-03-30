// @flow

import { connect } from 'react-redux'

import FormText from '../component/form-text'
import { addPiece3 } from '../action/write-story'

const mapStateToProps = (state) => {
  return {
  classy: 'enterStory',
  sectionTitle: 'writeStory',
  controlLabel: 'Write Story',
  type: 'text',
  componentClass: 'textarea',
  title: state.writeStory.get('piece3')
 }
}

const mapDispatchToProps = dispatch => ({
  handleChange: (e) => {
    dispatch(addPiece3(e.target.value))
   },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormText)
