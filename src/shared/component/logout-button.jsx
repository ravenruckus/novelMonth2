import React from 'react'

type Props = {
  classStyle: string,

}

const LogoutButton = ({ classStyle }: Props) =>

  <button className={classStyle}>
  <a href="http://localhost:8000/logout">Logout</a>
  </button>

export default LogoutButton
