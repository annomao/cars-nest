import React from 'react'
import { Navigate } from 'react-router-dom'
import LandingTemp from './LandingTemp'

function Review() {
  const holder = "Search by tag...."
  const text = "Post a review"
  
  function handleClick(){
    <Navigate to="/add_review"/>
  }

  return (
    <>
    <LandingTemp holder={holder} text={text} handleClick={handleClick}/>
    <div class="min-h-screen flex items-center justify-center">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> 
         {/* add reviews card here */}
      </div>
    </div>
    </>
  )
}

export default Review