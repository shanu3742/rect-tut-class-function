import React from 'react'
import HocLogic from '../hoc/HocLogic';

const MouseOverMultiMathOperator = (props) => {
   
  return (
   <>
    
    <div onMouseEnter={props.onDecrement}>{props.buttonText}</div>
   </>
  )
}

export default HocLogic(MouseOverMultiMathOperator)