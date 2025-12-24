import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

  const user = useContext(DataContext) 

  return (
    <div>
        <h1>Age {user.age}</h1>
    </div>
  )
}

export default Footer