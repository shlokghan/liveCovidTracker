import React from 'react'

function sum( a, b) {
    const sum = a+b
  return (
    sum
  )
}

function sub( a, b) {
    const sub = a-b
  return (
    sub
  )
}

function multi( a, b) {
    const multi = a*b
  return (
    multi
  )
}

function div( a, b) {
    
    const div = parseFloat(a/b).toFixed(2)
  return (
    div
  )
}

export  default sum 
export {div,multi,sub}