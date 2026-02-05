import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'
import { useEffect } from 'react'

function App() {
  const [photos, setPhotos] = useState([])
  const [pageno, setPageNo] = useState(1)

  

    function handleInc(){
        setPageNo(pageno + 1);
    }
    function handleDec(){
      if(pageno > 1) return setPageNo(pageno - 1);
        
    }

  useEffect(()=>{
    axios.get(`https://picsum.photos/v2/list?page=${pageno}&limit=5`).then((response)=>{
      setPhotos(response.data)
    }).catch((error)=>{
      console.log(`We are facing problems ${error}`);
    })
    
  },[pageno])

  const prevArray = Array.from({length: 3}, (_, index) => pageno - 1 - index).filter((value)=> value > 0).reverse();
  const nextArray = Array.from({length: 1}, (_, index) => pageno + index);
  const finalarray = [...prevArray, ...nextArray]

  
  return (
    <>
    <div className='container'>
      {photos.map((photos, index) => ( 
        
           <img className='image' key={index} src={photos.download_url}/>  
      ))}
    </div>
    <div className='pagebutton'>
      {pageno > 1 ? 
      (<button onClick={handleDec} className='next'>&lt;</button> ) : ("")
      }
      

      {/* {finalarray.map((value)=>{ return <div className='pageNo'>{value}</div>})} */}
      
      {finalarray.map((value) => (
          <div
            key={value}
            className={`pageNo ${value === pageno ? "active" : ""}`}
          >
            {value}
          </div>
        ))}




      <button onClick={handleInc} className='next'>&gt;</button>
    </div>
    </>
  )
}

export default App
