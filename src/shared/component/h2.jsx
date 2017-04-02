// @flow

import React from 'react'

type Props = {
  text: string,
  classy: string
}

const H2 = ({ text, classy }: Props) =>

  <h2 className={classy}>"{text}"</h2>

export default H2
