import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-blue-900 mr-7 text-black inline-block p-6 text-center rounded'>
        <img className='ml-6 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
        <h1 className='text-2xl font-semibold mb-4 text-white'>{props.username}</h1>
        <h2 className='text-xl text-white'>{props.city}, {props.age}</h2>
        <h4 className='text-white'>{props.profession}</h4>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>{props.profession}</button>

    </div>
  )
}

export default Card















// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className='text-3xl'>Username is {props.a}</div>
//   )
// }

// export default Card