import React from 'react'

function todo({title,datetime}) {
  return (
    <div className='todo'>
    <h3>{title}</h3>
    <P>{datetime}</P>  
    </div>
  )
}

export default todo
