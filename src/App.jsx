import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Adminreg from './component/Admin/Adminreg'
import Adminlogin from './component/Admin/Adminlogin/Adminlogin'
import Adminhome from './component/Admin/Adminhome/Adminhome'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={Adminreg}/>
            <Route path='/adminlogin' Component={Adminlogin}/>
            <Route path='/adminhome' Component={Adminhome}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
