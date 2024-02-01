import React, { forwardRef } from 'react'


const WelcomeComp = forwardRef((props,ref) => {
    console.log(props)
    return (
      <div ref={ref} >WelcomeComp</div>
    )
  })

export default WelcomeComp