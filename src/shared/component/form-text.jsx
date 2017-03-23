import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

type Props = {
  sectionTitle: string,
  controlLabel: string,
  type: string,
  title: string,
  handleChange: Function
}

const TextForm = ({ sectionTitle, controlLabel, type, title, handleChange }: Props) =>
  <FormGroup controlId={sectionTitle}>
      <ControlLabel>Section Title</ControlLabel>
      <FormControl
        name={sectionTitle}
        type={type}
        value={title}
        placeholder="Enter text"
        onChange={handleChange}
      />
    </FormGroup>

export default TextForm
