import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import Main from './components/Main/Main'

const App = () => {
  return (
    <>
      <div className='full-body'>
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

export default App