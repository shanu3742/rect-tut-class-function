import React, { memo, useState } from 'react'

const AppUpdate = ({name,updateName}) => {
    
  return (
   <>
   <h6>{name}</h6>
    <button onClick={updateName}>Update Name</button>
   </>
  )
}

export default memo(AppUpdate)