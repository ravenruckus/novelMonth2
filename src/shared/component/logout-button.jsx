import React from 'react'

type Props = {
  classStyle: string,

}

const LogoutButton = ({ classStyle }: Props) =>

  <button className={classStyle}>
   <a href="https://aliciagyori-novelmonth.herokuapp.com/">Logout</a>
  </button>

export default LogoutButton
