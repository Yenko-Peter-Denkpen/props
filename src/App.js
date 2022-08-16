import React from 'react'
import NavBar from './components/NavBar'
import todo from './components/todo'

function App() {

  let title="my activities to do for the week"
  return (
    <div>
    <NavBar title={title} />
    <Todo title="learning react" datetime="15 August 2022" />
    <Todo title="learning react" datetime="15 August 2022" />
    <Todo title="learning react" datetime="15 August 2022" />
    <Todo title="learning react" datetime="15 August 2022" />
    <Todo title="learning react" datetime="15 August 2022" />
    
    </div>
  )
}

export default App