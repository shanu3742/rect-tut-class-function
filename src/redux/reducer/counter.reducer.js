

const CounterReducer  = (state=0,{type,payload}) => {
    switch(type){
        case "INCREMENT":  return state+1
        case "DECREMENT":  return state-1
        default : return state
    }

}
export {CounterReducer}