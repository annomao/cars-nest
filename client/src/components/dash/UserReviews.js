import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

function UserReviews() {
  const [user,setUser] = useState(null)

  useEffect(()=>{
    fetch("https://cars-nest.herokuapp.com/api/v1/user/posts")
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  function handleEdit(editedData){
    const newData = user.reviews.map(review =>{
      if(review.id === editedData.id){
        return {
          ...review,
          title: editedData.title,
          description : editedData.description
        }
      }else{
        return review
      }
    })
    setUser(newData)
  }


  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {user &&  user.reviews.map(review =>{
        return <PostCard key={review.id} post={review} url={`https://cars-nest.herokuapp.com/api/v1/reviews/${review.id}`} onEdit={handleEdit}/>
        })
      }
      </div>
      </div>
    </div>
  )
}

export default UserReviews