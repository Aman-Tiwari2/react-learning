import React, { useContext } from 'react'
import { DataContext } from './context/UserContext'
import Footer from './components/Footer'

const App = () => {

  const data = useContext(DataContext)
  return (
    <div>
      <h1>My name is {data.name}</h1>
      <Footer />
    </div>
  )
}

export default App



















// import React from 'react'
// import { Route, Routes} from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import Product from './pages/Product'
// import Header from './components/Header'

// const App = () => {
//   return (
//     <div>
//         <Header />
//         <Routes>
//             {/* <Route path='/header' element={<Header />} /> */}
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/product' element={<Product />} />
//         </Routes>
//     </div>
//   )
// }

// export default App












// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {

//     const [data, setData] = useState([])

//     const getData = async () => {
//         const response = await axios.get('https://picsum.photos/v2/list')
//         setData(response.data)

//         console.log(data)
        
//         // const data = response.data
//         // data.forEach((elem)=>{
//         //     console.log(elem.author)

//         // })
//     }


//     // Now here we are going to use useEffect method that can help us to work pararely some work for some specific time.
//     useEffect(() => {
//         getData()
//     }, [])


//   return (
//     <div className='p-10'>
//         {/* <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button> */}
//         <div className='p-5 bg-emerald-700 mt-5 text-white rounded'>
//             {data.map(function(elem,idx){
//                 return (
//                     <div key= {idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
//                         <img  className='h-40 rounded' src={elem.download_url} alt="images" />
//                         <h1>{elem.author}</h1>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default App


















// import React from "react";
// import Card from "./components/Card";

// const App = () => {
//   const users = [
//     {
//       name: "Aman Sharma",
//       city: "Delhi",
//       age: 24,
//       profession: "Frontend Developer",
//       profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
//     },
//     {
//       name: "Tanu Gupta",
//       city: "Mumbai",
//       age: 22,
//       profession: "UI/UX Designer",
//       profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
//     },
//     {
//       name: "Rohan Mehta",
//       city: "Bangalore",
//       age: 27,
//       profession: "Backend Developer",
//       profilePhoto: "https://randomuser.me/api/portraits/men/21.jpg",
//     },
//     {
//       name: "Priya Singh",
//       city: "Pune",
//       age: 25,
//       profession: "Data Analyst",
//       profilePhoto: "https://randomuser.me/api/portraits/women/32.jpg",
//     },
//     {
//       name: "Arjun Verma",
//       city: "Hyderabad",
//       age: 28,
//       profession: "Full Stack Developer",
//       profilePhoto: "https://randomuser.me/api/portraits/men/42.jpg",
//     },
//   ];

//   return (
//     <div>
//       <div className="p-10">
//         {users.map(function(elem, idx){
//             return <Card key={idx} username= {elem.name} age={elem.age} city={elem.city} photo={elem.profilePhoto} profession={elem.profession}/>
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;










// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   return (
//     <div>
//         <Card  a = 'Aman' />
//         <Card  a = 'Tanu' />
//     </div>
//   )
// }

// export default App










/* 
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header /> 
        <Footer />   
    </>
  )
}

export default App;









 */

// import React, { useState } from 'react'

// export const App = () => {

//     const submitHandler = (e) => {

//         e.preventDefault()
//         console.log(username)

//         setUsername('')
//     }

//     const [username, setUsername] = useState('')

//   return (
//     <form onSubmit={(e) => { submitHandler(e) }}>
//         <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className="px-4 py-3 text-xl m-5 bg-yellow-50 rounded" type="text" placeholder='Enter Your Name '/>
//         <button className='px-4 py-3 m-5 text-xl text-white font-semibold bg-emerald-600 rounded'>Submit</button>
//     </form>
//   )
// }

// export default App;











// import React from 'react'

// export const App = () => {

//     const submitHandler = (e) => {
//         e.preventDefault()
//         console.log("submitted")
//     }

//   return (
//     <form onSubmit={(e) => { submitHandler(e) }}>
//         <input className="px-4 py-3 text-xl m-5 bg-yellow-50 rounded" type="text" placeholder='Enter Your Name '/>
//         <button className='px-4 py-3 m-5 text-xl text-white font-semibold bg-emerald-600 rounded'>Submit</button>
//     </form>
//   )
// }

// export default App;











// import React, { useState } from "react";

// export default function App() {

//     const [num, setNum] = useState(0)

//     return (<div>
//             <h1 className="text-5xl">Value of num :- {num}</h1>
//             <button onClick={ function(){
//                 setNum(num+1)
//             } }>Incremnet</button>
//             <button onClick={ function(){
//                 setNum(num-1)
//             }}>Decrement</button>
//         </div>
//     );
// }
