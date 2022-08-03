import React from 'react'
import LandingTemp from './LandingTemp'

function Review() {
  const holder = "Search by tag...."
  const text = "Post a review"
  return (
    <>
    <LandingTemp holder={holder} text={text} linkTo="/add_review"/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> 
         {/* add reviews card here */}
      </div>
    </div>
    </>
  )
}

export default Review