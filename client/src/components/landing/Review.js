import React from 'react'
import DisplayCard from './DisplayCard'
import LandingTemp from './LandingTemp'

function Review({reviews}) {
  const holder = "Search by tag...."
  const text = "Post a review"

  const displayedReviews = reviews.map(review =>{
    return <DisplayCard key={review.id} post={review} linkTo={`/display_review/${review.id}`}/>
  })
  return (
    <>
    <LandingTemp holder={holder} text={text} linkTo="/add_review"/>
    <div className="min-h-screen items-center flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> 
         {displayedReviews}
      </div>
    </div>
    </>
  )
}

export default Review