import React from 'react'

const ClickMultiMathOperator = () => {
    const [mul,setMul] = React.useState(1);
    const onMul = ()=> {
        setMul((p) => p*2)
    }
  return (
   <>
    <div>{mul}</div>
    <div onClick={onMul}>ClickMultiMathOperator</div>
   </>
  )
}

export default ClickMultiMathOperator