import React from 'react'
import { Navigate } from 'react-router-dom'
import LandingTemp from './LandingTemp'

function Home() {

  const holder = "Search by question...."
  const text = "ask a question"

  function handleClick(){
    <Navigate to="/add_question"/>
  }
  return (
    <>
    <LandingTemp holder={holder} text={text} handleClick={handleClick}/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> 
         {/* add questions card here */}
      </div>
    </div>
    </>
  )
}

export default Home