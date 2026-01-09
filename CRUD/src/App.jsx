import React, { useState } from 'react'

const App = () => {


  const [todos, settodos] = useState([
    {
      id:1, 
      title:"Kaam Krle Dost",
      iscompleted:false
    }
  ])


  const [title, settitle] = useState("")
  const [checked, setchecked] = useState(false)




  return (
    <>
    <div>
      <h1>Create Tasks</h1>
      <form>
        <input 
          onChange={(e)=> {settitle(e.target.value)}}
          type='text'
          placeholder='title'
          value={title}
        />
        <input 
          onChange={(e) => {e.target.checked}}
          checked={checked}
          type="checkbox" 
        />
        <button>Create Todo's</button>

      </form>
    </div>
    

    
    
    
    </>
  )
}

export default App