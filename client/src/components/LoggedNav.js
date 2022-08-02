import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import useUser from '../hooks/useUser';

function LoggedNav() {
  const [navbar, setNavbar] = useState(false);
  const {auth, setAuth} = useUser()

  function handleLogout(){
    fetch("https://cars-nest.herokuapp.com/api/v1/auth/logout",{
      method: "Delete"
    })
    .then(res =>{
      if (res.ok){
        setAuth(null)
      }
    })
  }

  return (
    <nav className="w-full bg-[#f2f2f2] shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <span>
                <NavLink to='/' className="text-2xl font-bold text-cBlue">CarsNest</NavLink>
            </span>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
              {navbar ? <AiOutlineClose/> : <FaBars/> }
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`} >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-cBlue hover:text-gray-800">
                <Link to='/'>Home</Link>
              </li>
              <li className="text-cBlue hover:text-gray-800">
                <Link to='/question'>Questions</Link>
              </li>
              <li className="text-cBlue hover:text-gray-800">
                <Link to='/review'>Reviews</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 md:hidden md:inline-block">
              <span
                className="inline-block w-full px-4 py-2 text-center text-white bg-cBlue rounded-md shadow hover:bg-gray-800">
                {auth.username} </span>
              <button 
                className="inline-block w-full px-4 py-2 text-center text-cBlue bg-white rounded-md shadow hover:text-gray-800">
                Log Out </button>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <span
            className="px-4 py-2 text-white bg-cBlue rounded-md shadow hover:bg-gray-800">{auth.username}</span>
          <button onClick={handleLogout}
            className="px-4 py-2 text-cBlue bg-white rounded-md shadow hover:text-gray-800">Log Out</button>
        </div>
      </div>
    </nav>
  );
}


export default LoggedNav