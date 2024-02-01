import React from 'react'
import AppCounterWrapper from '../hoc_Part2/AppHigherOrder'

const IncDecCounter = (props) => {


  return (
   <div>
   <div onClick={props.onIncrement}>Increment+</div>
   <div onClick={props.onDecrement}>Decrement-</div>
   </div>
  )
}


export default AppCounterWrapper(IncDecCounter)