import React, { useState } from 'react'

const App = () => {

  const [firstname, setFirstname] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {firstname, email, age}
    console.log(newUser.firstname, newUser.email, newUser.age )
  }

  return (
    <>
    <div className='flex items-center justify-center h-screen bg-blue-900'>
      <div className='bg-emerald-600 p-10 rounded w-120 h-110 '>
        <h1 className='text-center mb-8 text-5xl text-black'>SignIn Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5 mb-4 justify-center items-center'>
            <input 
              className='w-full h-13 p-3 rounded bg-white'
              type="text"
              placeholder='Enter your name'
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname} 
            />
            <input 
              className='w-full h-13 p-3 rounded bg-white'
              type="email"
              placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
              value={email} 
            />
            <input 
              className='w-full h-13 p-3 rounded bg-white'
              type="number"
              placeholder='Enter your age'
              onChange={(e) => setAge(e.target.value)}
              value={age} 
            />
            <button className='bg-black rounded w-full h-13 text-3xl p-2 text-white'>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
    
  )
}

export default App