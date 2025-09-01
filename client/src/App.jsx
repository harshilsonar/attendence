import { useState } from 'react'

import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Adddata from '../pages/Adddata'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
<Route path="/"><Home/></Route>
<Route path="/Adddate"><Adddata></Adddata></Route>
    </Routes>
     </>
  )
}

export default App
