import React, { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom'
import useUser from '../hooks/useUser';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Home from './landing/Home';
import Review from './landing/Review';
import LoggedNav from './LoggedNav';
import Navbar from './Navbar';

function App() {
  const {auth, setAuth} = useUser()

  useEffect(() => {
    // auto-login
    fetch("https://cars-nest.herokuapp.com/api/v1/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setAuth(user));
      }else{
        setAuth(null)
      }
    });
  }, [])

  return (
    <>
      {auth ? <LoggedNav/> : <Navbar/> }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question' element={<Home/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App;
