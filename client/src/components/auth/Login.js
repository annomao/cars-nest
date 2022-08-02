import React, { useState } from 'react'
import BaseForm from './BaseForm'
import { FaAt,FaLock,FaArrowRight } from 'react-icons/fa'
import useUser from '../../hooks/useUser'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [userData, setUserData] = useState({})
  const [errors, setErrors] = useState([])
  const { setAuth } = useUser()
  const navigate = useNavigate()

  const title = "LOGIN TO YOUR ACCOUNT"
  const check = "Don't have an account?"
  const link = '/signup'

  function handleSubmit(event){
    event.preventDefault()
    fetch("https://cars-nest.herokuapp.com/api/v1/auth/login",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(userData)
    }
    )
    .then(res => {
      if (res.ok){
        res.json()
        .then( data => {
          setAuth(data)
          navigate("/")
        })
      }else{
        res.json().then((err) => setErrors(err.errors));
      }
    })
  }

  function handleChange(event){
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  return ( 
    <>
    <BaseForm title={title} check={check} link={link}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaAt/></span></div>
            <input 
            id="email" 
            type="email" 
            name="email" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            placeholder="E-Mail Address" 
            onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaLock/></span>
            </div>
            <input 
            id="password" 
            type="password" 
            name="password" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            placeholder="Password" 
            onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue hover:bg-grey-800 py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Login</span>
            <span><FaArrowRight/></span>
          </button>
        </div>
      </form>
      {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
    </BaseForm>
    </>
  )
}

export default Login