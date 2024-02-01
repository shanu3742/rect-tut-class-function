import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onDecerementCounter, onIncrementCounter } from '../../../redux/action/counter.action';

const CounterComp = () => {
    const counterState = useSelector((state) => state?.counter)
    const dispatch = useDispatch()
    const onIncrement = () => {
      //  dispatch({type:'INCREMENT',payload:0})
      //onIncrement just return a object having type and payload
       dispatch(onIncrementCounter())
    }

    const onDecrement = () => {
         dispatch(onDecerementCounter())
    }
  return (
    <>
    <div onClick={onDecrement}>-</div>
    <div>{counterState}</div>
    <div  onClick={onIncrement}>+</div>
    </>
  )
}

export default CounterComp