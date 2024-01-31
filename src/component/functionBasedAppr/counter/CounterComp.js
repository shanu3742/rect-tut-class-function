import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onDecerementCounter, onIncrementCounter } from '../../../redux/action/counter.action';

const CounterComp = () => {
    const counterState = useSelector((state) => state)
    console.log('counterState',counterState);
    const dispatch = useDispatch()
    const onIncrement = () => {
       dispatch(onIncrementCounter())
    }

    const onDecrement = () => {
         dispatch(onDecerementCounter())
    }
  return (
    <>
    <div onClick={onDecrement}>-</div>
    <div>{counterState.counter}</div>
    <div  onClick={onIncrement}>+</div>
    </>
  )
}

export default CounterComp