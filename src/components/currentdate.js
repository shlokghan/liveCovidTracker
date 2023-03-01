import React from 'react'

function Currentdate() {
    const myname = 'shlok'
    var date= new Date().toLocaleDateString()
    var time = new Date().toLocaleTimeString()
   
  return (
    <>
    <h1 >My Name is {myname}</h1>
    <p>Current Date is {date}</p>
    <p>Current Time is {time}</p>
    
   
    </>
  )
}

export default Currentdate