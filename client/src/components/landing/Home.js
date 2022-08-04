import React from 'react'
import DisplayCard from './DisplayCard'
import LandingTemp from './LandingTemp'

function Home({questions}) {
  const holder = "Search by question...."
  const text = "ask a question"

  const displayedQuestions = questions.map(question =>{
    return <DisplayCard key={question.id} post={question} linkTo={`display_question/${question.id}`}/>
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