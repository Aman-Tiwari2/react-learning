import React, { createContext } from 'react'


export const DataContext = createContext()

const UserContext = ({children}) => {


    const userData = {
        name:'Aman',
        age:21,
        city: 'Lucknow'
    }

  return (
    <div>
        <DataContext.Provider value={userData}>

            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext