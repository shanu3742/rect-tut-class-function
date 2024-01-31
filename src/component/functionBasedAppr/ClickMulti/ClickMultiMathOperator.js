import React from 'react'
import HocLogic from '../hoc/HocLogic';

const ClickMultiMathOperator = (props) => {
  console.log(props)
  
  return (
   <>
   
    <div onClick={props.onDecrement}>{props.buttonText}</div>
   </>
  )
}

export default HocLogic(ClickMultiMathOperator)