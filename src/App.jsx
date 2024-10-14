import React from 'react'
import './App.css'
import Sidebar from './components/main-page/Sidebar'
import Body from './components/main-page/Body'

const App = () => {
  return (
    <>
        <div className='app-body'>
        <Sidebar />
        <Body />
        </div>
    </>
  )
}

export default App