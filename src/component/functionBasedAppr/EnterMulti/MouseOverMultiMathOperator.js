import React from 'react'

const MouseOverMultiMathOperator = () => {
    const [mul,setMul] = React.useState(1);
    const onMul = ()=> {
        setMul((p) => p*2)
    }
  return (
   <>
    <div>{mul}</div>
    <div onMouseEnter={onMul}>ClickMultiMathOperator</div>
   </>
  )
}

export default MouseOverMultiMathOperator