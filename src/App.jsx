import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Adminreg from './component/Admin/Adminreg'
import Adminlogin from './component/Admin/Adminlogin/Adminlogin'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={Adminreg}/>
            <Route path='/adminlogin' Component={Adminlogin}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
