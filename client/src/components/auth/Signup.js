import React from 'react'
import { FaUserAlt,FaUserCircle } from 'react-icons/fa'
import BaseForm from './BaseForm'

function Signup() {
  const title = "REGISTER FOR AN ACCOUNT"
  const check = "Already have an account?"
  return ( 
    <>
    <BaseForm title={title} check={check}>
      <form>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaUserAlt/></span></div>
            <input id="fullname" type="text" name="fullname" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Fullnames..." />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaUserCircle/></span></div>
            <input id="username" type="text" name="username" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Username..." />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaAt/></span></div>
            <input id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaLock/></span>
            </div>
            <input id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
          </div>
        </div>
        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue hover:bg-grey-800 py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Login</span>
            <span><FaArrowRight/></span>
          </button>
        </div>
      </form>
    </BaseForm>
    </>
  )
}

export default Signup