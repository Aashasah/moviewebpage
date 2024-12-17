import React from 'react'
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import Popular from './components/pages/Popular'
import Toppage from './components/pages/Toppage'
import Upcoming from './components/pages/Upcoming'


function App() {
  return (
   <>
  
 
  <Header/>
   
   <Routes>
  
    <Route index element={<Home/>}/> 
  
    
    <Route path='/popular' element={<Popular/>}/>
    <Route path='/toppage' element={<Toppage/>}/>
    <Route path='/Upcoming' element={<Upcoming/>}/>
   </Routes>
 
   </>
  )
}

export default App
