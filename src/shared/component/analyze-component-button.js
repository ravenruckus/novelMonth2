// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function
}

const Button = ({ label, handleClick, originalPieceId, userBookId, pieceNumber }: Props) =>
  <button onClick={(event) => handleClick(event, originalPieceId, userBookId, pieceNumber)}>{label}</button>

export default Button
