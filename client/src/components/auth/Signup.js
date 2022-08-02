import React, { useState } from 'react'
import { FaUserAlt,FaUserCircle,FaAt,FaLock,FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import BaseForm from './BaseForm'

function Signup() {
  const [userSignupData, setUserSignupData] = useState({})
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const title = "REGISTER FOR AN ACCOUNT"
  const check = "Already have an account?"
  const link = '/login'

  function handleSubmit(event){
    event.preventDefault()
    fetch("https://cars-nest.herokuapp.com/api/v1/users",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(userSignupData)
    }
    )
    .then(res => {
      if (res.ok){
        res.json()
        .then(()=> navigate('/login'))
      }else{
        res.json().then((err) => setErrors(err.errors));
      }
    })

  }

  function handleChange(event){
    setUserSignupData({
      ...userSignupData,
      [event.target.name]: event.target.value
    })
  }
  return ( 
    <>
    <BaseForm title={title} check={check} link={link}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaUserAlt/></span></div>
            <input 
            onChange={handleChange}
            id="name" type="text" name="name" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Fullnames..." 
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaUserCircle/></span></div>
            <input 
            onChange={handleChange}
            id="username" type="text" name="username" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Username..." 
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaAt/></span></div>
            <input 
            onChange={handleChange}
            id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" 
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaLock/></span>
            </div>
            <input 
            onChange={handleChange}
            id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" 
            />
          </div>
        </div>
        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue hover:bg-grey-800 py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Signup</span>
            <span><FaArrowRight/></span>
          </button>
        </div>
      </form>
      {errors.map((err) => (
          <p  className="text-red-600 text-base" key={err}>{err}</p>
        ))}
    </BaseForm>
    </>
  )
}

export default Signup