import React, { useState } from 'react'
import { nanoid } from 'nanoid'
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

  const SubmitHandler = (e)=>{
    e.preventDefault()
    const newtodos = {
      id: nanoid(),
      title:title,
      iscompleted:checked
    }


    


    let copytodo = [...todos];
    copytodos.push(newtodos)
    settodos(copytodos)

    // sort form to write above code to copytodos

    settodos([...todos, newtodos])

  }

  console.log(todos)


  return (
    <>
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input 
          onChange={(e)=> {settitle(e.target.value)}}
          type='text'
          placeholder='title'
          value={title}
        />
        <input 
          onChange={(e) => {setchecked(e.target.checked)}}
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