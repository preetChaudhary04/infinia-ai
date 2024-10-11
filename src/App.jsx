import React from 'react'
import './App.css'
import Sidebar from './components/main-page/Sidebar'
import CentralBody from './components/main-page/CentralBody'

const App = () => {
  return (
    <>
        <div className='app-body flex '>
        <Sidebar />
        <CentralBody />
        </div>
    </>
  )
}

export default App