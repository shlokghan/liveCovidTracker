import React from 'react'
import './greeting.css'

function Greeting() {

    const time =13// new Date().getHours()
    var greet=''
    var cssColor={}
    if(time >= 0 && time <= 12){
         greet = 'Good Morning'
         cssColor.color='Green'
    }else if(time > 12 && time <= 17){
         greet = 'Good Afternoon'
         cssColor.color='red'
    }else if(time > 17 && time <= 20){
         greet = 'Good Evening'
         cssColor.color='brown'
    }else if(time > 20 && time <= 24){
         greet = 'Good Night'
         cssColor.color='black'
    }

  return (
    
    <div className='mydiv'>
        <h1 className='myh1'>
            Hello Sir,<span style={cssColor}>{greet}</span> 
        </h1>
    </div>
   
  )
}

export default Greeting