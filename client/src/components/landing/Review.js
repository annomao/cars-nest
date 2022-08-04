import React, { useEffect,useState } from 'react'
import DisplayCard from './DisplayCard'
import LandingTemp from './LandingTemp'

function Review() {
  const[reviews,setReviews] = useState([])

  useEffect(()=>{
    fetch("https://cars-nest.herokuapp.com/api/v1/reviews")
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  const holder = "Search by tag...."
  const text = "Post a review"

  const displayedReviews = reviews.map(review =>{
    return <DisplayCard key={review.id} post={review} to={`review/${review.id}`}/>
  })
  return (
    <>
    <LandingTemp holder={holder} text={text} linkTo="/add_review"/>
    <div className="min-h-screen flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> 
         {displayedReviews}
      </div>
    </div>
    </>
  )
}

export default Review