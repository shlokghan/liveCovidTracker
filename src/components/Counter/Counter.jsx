import React, { useState } from 'react'

function Counter() {
    let [time,setTime]=useState(new Date().toLocaleTimeString())

    let [digitalClock,setDigitalClock]=useState(new Date().toLocaleTimeString())
    const refreshTime =()=>{
        console.log('Time is changing')
        return setTime(()=>{
            return(
                time=new Date().toLocaleTimeString()
            )
        })
    }

    const updateTime = ()=>{
        return setDigitalClock(()=>{
            return(
                digitalClock=new Date().toLocaleTimeString()
            )
        })
    }

    setInterval(updateTime,1000)

  return (
    <>
        <h1><h1>{time}</h1></h1>
        <button onClick={refreshTime}> Click Me</button>
        <h1 >{digitalClock}</h1>
    </>
  )
}

export default Counter