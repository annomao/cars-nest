import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'

function UserQuestions() {
  const [user,setUser] = useState({})

  useEffect(()=>{
    fetch("https://cars-nest.herokuapp.com/api/v1/user/posts")
    .then(res => res.json())
    .then(data => setUser(data))
  })

  const displayedQuestions = user.questions.map(question =>{
    return <PostCard post={question}/>
  })

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {displayedQuestions}
      </div>
      </div>
    </div>
  )
}

export default UserQuestions