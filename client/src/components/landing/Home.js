import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'
import LandingTemp from './LandingTemp'

function Home() {
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("https://cars-nest.herokuapp.com/api/v1/questions")
    .then(res => res.json())
    .then(data => setQuestions(data))
  },[])

  const holder = "Search by question...."
  const text = "ask a question"

  const displayedQuestions = questions.map(question =>{
    return <DisplayCard key={question.id} post={question} to={`review/${question.id}`}/>
  })

  return (
    <>
    <LandingTemp holder={holder} text={text} linkTo="/add_question"/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2"> 
         {displayedQuestions}
      </div>
    </div>
    </>
  )
}

export default Home