import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'
import LandingTemp from './LandingTemp'

function Home() {
  const [questions, setQuestions] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("https://cars-nest.herokuapp.com/api/v1/questions")
    .then(res => res.json())
    .then(data => setQuestions(data))
  },[])

  const holder = "Search...."
  const text = "ask a question"

  const searchQuestions = questions.filter((question)=>{
    return question.description.toLowerCase().includes(search.toLowerCase())
  })

  const displayedQuestions = searchQuestions.map(question =>{
    return <DisplayCard key={question.id} post={question}/>
  })

  return (
    <>
    <LandingTemp holder={holder} text={text} linkTo="/add_question" setSearch={setSearch}/>
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2"> 
         {displayedQuestions}
      </div>
    </div>
    </>
  )
}

export default Home