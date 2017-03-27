import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

type Props = {
  classy: string,
  sectionTitle: string,
  controlLabel: string,
  type: string,
  title: string,
  handleChange: Function
  //I'm not sure if this needs to be here since it works without it and isn't passed down through props but it is dispatched so I need to look that up to understand it better.
}

const TextForm = ({ sectionTitle, controlLabel, type, title, componentClass, handleChange }: Props) =>
  <FormGroup controlId={sectionTitle}>
      <ControlLabel>{controlLabel}</ControlLabel>
      <FormControl
        name={sectionTitle}
        type={type}
        value={title}
        placeholder="Enter text"
        onChange={handleChange}
      />
    </FormGroup>

export default TextForm
