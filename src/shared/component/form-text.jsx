import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

type Props = {
  classy: string,
  sectionTitle: string,
  controlLabel: string,
  type: string,
  title: string,
  componentClass: string,
  handleChange: Function
}

const TextForm = ({ sectionTitle, controlLabel, type, title, componentClass, handleChange }: Props) =>
  <FormGroup controlId={sectionTitle}>
      <ControlLabel>{controlLabel}</ControlLabel>
      <FormControl
        name={sectionTitle}
        type={type}
        value={title}
        componentClass={componentClass}
        placeholder="Enter text"
        onChange={handleChange}
      />
    </FormGroup>

export default TextForm
