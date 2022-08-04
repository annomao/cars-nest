import React, { useEffect } from 'react';
import { Routes,Route, useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Home from './landing/Home';
import QuestionForm from './landing/QuestionForm';
import QuestionPost from './landing/QuestionPost';
import Review from './landing/Review';
import ReviewPost from './landing/ReviewPost';
import ReviewForm from './landing/ReviewForm';
import LoggedNav from './LoggedNav';
import Navbar from './Navbar';
import PrivateRoutes from './PrivateRoute';

function App() {
  const {auth, setAuth} = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("https://cars-nest.herokuapp.com/api/v1/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setAuth(user)
          navigate("/")
        });
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
        <Route path='/question' element={<Home/>}>
          <Route path=":id" element={<QuestionPost/>} />
        </Route>
        <Route path='/review' element={<Review/>}>
          <Route path=":id" element={<ReviewPost/>} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route element={ <PrivateRoutes/> }>
          <Route path="/add_question" element={<QuestionForm/>}/>
          <Route path="/add_review" element={<ReviewForm/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
