const onIncrementCounter = (data) => {

    return {
        type:'INCREMENT',
        payload:data
    }
}

const onDecerementCounter = (data) => {
    return {
     type:'DECREMENT',
     payload:data
    }
}


export { onIncrementCounter,onDecerementCounter}