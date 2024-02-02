import React, { memo } from 'react'

const AppTitle = ({onTitleClick}) => {
    console.log('AppTitle rendered')
    React.useEffect(() => {
        console.log('AppTitle rendered onMounting')
    })
  return (
    <div onClick={onTitleClick}>AppTitle</div>
  )
}

export default memo(AppTitle)