import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'

function QuestionPost() {
  const [question,setQuestion] = useState(null)
  const { id } = useParams()

  const fetchQuestions = async (QId) => {
    const res = await fetch(`https://cars-nest.herokuapp.com/api/v1/questions/${QId}`)
    const data = await res.json()
    setQuestion(data)
  }

  useEffect(()=>{ fetchQuestions(id) },[])


  return (
    <>
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 mt-2">
      <div className="h-56 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img className="w-full" src={question && question.image} alt="car"/>
      </div>
      <div className="bg-white p-4 flex flex-col justify-between leading-normal px-6 py-4">
        <p className="text-gray-700 text-xl font-bold">
          {question && question.description}
        </p>
        <div className="text-base mb-2">{question && question.user.username}</div>
      <div className="pt-4 pb-2">
      {question && question.categories.split(",").map((category)=>{
          return <span key={category} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
        })}
      </div>
      </div>
    </div>
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue px-6 py-4">comments</div>
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 mt-2">
    {question && question.quecomments.map((comment)=>{
      return <Comment key={comment.id} comment={comment}/>
    })}</div>
    </>
  )
}

export default QuestionPost