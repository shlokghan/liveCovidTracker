import React from 'react'
import './attribute.css'

function Attribute() {

    const src1 = 'https://picsum.photos/200/301'
    const src2 = 'https://picsum.photos/200/302'
    const src3 = 'https://picsum.photos/200/303'
    const src4 = 'https://picsum.photos/200/304'

    const links = 'www.google.com'
    const myname = 'shlok'
  return (
    <>
     <h1 className='h1tag'>My Name is {myname}</h1>
        <a href={links} target="google"> Click me
        </a>    
        <div>
      <img className='imgages'  src={src1} alt='randomImage'/>
      <img className='imgages' src={src2} alt='randomImage'/>
      <img className='imgages' src={src3} alt='randomImage'/>
      <img className='imgages' src={src4} alt='randomImage'/>
        </div>
    </>
  )
}

export default Attribute