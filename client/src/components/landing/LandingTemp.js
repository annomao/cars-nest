import React from 'react'
import { FaSearch,FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function LandingTemp(props) {
  return (
    <>
    <div className='md:flex md:justify-between m-6'>
      <div>
        <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><FaSearch/></span></div>
            <input 
            onChange={(e)=>props.setSearch(e.target.value)}
            id="search" 
            type="text" 
            name="search" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border border-cBlue bg-neutral-100 py-2 focus:outline-none focus:border-blue-400" 
            placeholder={props.holder} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <NavLink to={props.linkTo}
            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue hover:bg-grey-800 py-2 transition duration-150 ease-in">
            <span className="pl-2"><FaPlus/></span>
            <span className="px-2 uppercase">{props.text}</span>
          </NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingTemp