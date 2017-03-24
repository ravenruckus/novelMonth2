// @flow

import React from 'react'

type Props = {
  label: string,
  enterTitle: string,
  handleClick: Function
}

const Button = ({ label, handleClick, enterTitle }: Props) =>
  <button onClick={handleClick}>{label}</button>

export default Button
