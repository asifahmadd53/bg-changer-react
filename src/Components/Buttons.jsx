import React, { useState } from 'react'

function Buttons() {
    const [color, setColor] = useState('black')

  return (
    <div className='h-screen flex items-center justify-center' style={{backgroundColor: color}}>
      <div className='bg-white w-[70%]  fixed top-16 rounded-lg'>
      <div className='flex items-center justify-evenly'>
        <button onClick={(()=>setColor('green'))} style={{backgroundColor:'green'}} className='p-2 m-2 rounded-md'>Green</button>
        <button  onClick={(()=>setColor('red'))} style={{backgroundColor:'Red'}} className='w-16   p-2 m-2 rounded-md'>Red</button>
        <button  onClick={(()=>setColor('yellow'))} style={{backgroundColor:'Yellow'}} className='w-16  p-2 m-2 rounded-md'>Yellow</button>
        <button  onClick={(()=>setColor('gray'))} style={{backgroundColor:'gray'}} className='w-16  p-2 m-2 rounded-md'>Gray</button>
        <button  onClick={(()=>setColor('darkblue'))} style={{backgroundColor:'darkblue'}} className='w-16 text-white  p-2 m-2 rounded-md'>Gray</button>
      </div>
      </div>
    </div>
  )
}

export default Buttons
