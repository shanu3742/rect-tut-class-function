import React, { useState } from 'react'
import AppUpdate from './AppUpdate'
import AppTitle from './AppTitle'

const PerformanceComp = () => {

    const [name,setName] = useState("AkG")

    const updateName =React.useCallback( () => {
        setName(name+Math.random())
      },[name])

    const handleTitleClick = React.useCallback(() => {
        console.log("title is clicked")
    },[])

  return (
   <>
    <AppTitle onTitleClick={handleTitleClick}  />
    <AppUpdate name={name} updateName={updateName} />
   </>
  )
}

export default PerformanceComp