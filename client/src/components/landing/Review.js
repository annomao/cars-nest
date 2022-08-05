import React, { useEffect,useState } from 'react'
import DisplayCard from './DisplayCard'
import LandingTemp from './LandingTemp'

function Review() {
  const[reviews,setReviews] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("https://cars-nest.herokuapp.com/api/v1/reviews")
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  const holder = "Search...."
  const text = "Post a review"

  const searchReviews = reviews.filter((review)=>{
    return review.description.toLowerCase().includes(search.toLowerCase())
  })

  const displayedReviews = searchReviews.map(review =>{
    return <DisplayCard key={review.id} post={review}/>
  })
  return (
    <>
    <LandingTemp holder={holder} text={text} linkTo="/add_review"  setSearch={setSearch}/>
    <h1 className="font-bold text-5xl text-center text-cBlue mb-4">Reviews</h1>
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> 
         {displayedReviews}
      </div>
    </div>
    </>
  )
}

export default Review