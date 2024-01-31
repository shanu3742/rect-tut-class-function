import { useState } from "react"

const HocLogic= (WrapperCom) => {

   
    const HocCom = (props) => {

        // do something
        const [count ,setCount]= useState(0);
        const onIncrement = () => {
            setCount(count+1)
        }
        const onDecrement = () => {
             setCount(count-1)
        }

        return <div>
           <div>{count}</div>
            <WrapperCom {...props}  onIncrement={onIncrement} onDecrement = {onDecrement}/>
        </div>
    }

    return HocCom

}
export default HocLogic;