// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick, originalPieceId, userBookId, pieceNumber, microPiece }: Props) =>
  <button onClick={(event) => handleClick(event, originalPieceId, userBookId, pieceNumber, microPiece)}>{label}</button>

export default Button
