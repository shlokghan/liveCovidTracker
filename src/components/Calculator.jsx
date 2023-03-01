import React from 'react'
import * as obj from './CalculatorHelper'

function Calculator() {
  return (
    <>
        <ul>
            <li>Sum of two number is:- {obj.default(4,4)} </li>
            <li>Sub of two number is:- {obj.sub(10,5)} </li>
            <li>Multi of two number is:- {obj.multi(4,4)} </li>
            <li>Div of two number is:- {obj.div(11,3)} </li>
        </ul>
    </>
  )
}

export default Calculator