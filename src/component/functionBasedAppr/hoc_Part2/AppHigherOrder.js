import { useState } from "react"



const AppCounterWrapper = (ChildComponent) =>{


    const  Wrapper =(props) =>{

        const [count,setCount] = useState(0);

        const onIncrement =() =>{
            setCount(count+1)
        }

        const onDecrement = () =>{
            setCount(count-1)
        }
        

        return <>
        <h6>{count}</h6>
        <ChildComponent  onIncrement={onIncrement}  onDecrement={onDecrement}    {...props}/>
    
        </>
    }
    
    return Wrapper

}


export default AppCounterWrapper