import React from 'react';
import { Routes,Route } from 'react-router-dom'
import Login from './auth/Login';
import Signup from './auth/Signup';
import Home from './landing/Home';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App;
