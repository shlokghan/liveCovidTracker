import React from 'react'

function Post(props) {
  return (
    <>
    
        <h3> Welcome {props.sname}</h3>
        <ul>
            <li>
                <a href={props.link}>
                    <img src={props.imagesrc}/>
                </a>
            </li>
        </ul>
    </>
  )
}

export default Post