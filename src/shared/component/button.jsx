// @flow

import React from 'react'

type Props = {
  label: string,
  enterText: string,
  handleClick: Function
}

const Button = ({ label, handleClick, enterText }: Props) =>
  <button onClick={handleClick}>{label}</button>

export default Button
