import React, { useState, useEffect } from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import Comment from './Comment'

function QuestionPost() {
  const [question, setQuestion] = useState({})
  let params = useParams()
  let id = parseInt(params.id)

  useEffect(()=>{
    fetch(`https://cars-nest.herokuapp.com/api/v1/questions/${id}`)
    .then(res => res.json())
    .then(data => setQuestion(data))
  },[])

  return (
    <>
    <div className="">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-xl font-bold">
          {question.description}
        </p>
        <div className="text-base mb-2">{question.user.username}</div>
      <div className="pt-4 pb-2">
      {question.categories.split(",").map((category)=>{
          return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
        })}
      </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsUp/> {question.upvotes}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsDown/> {question.downvotes}</span>
      </div>
    </div>
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue px-6 py-4">comments</div>
    {question.quecomments.map((comment)=>{
      return <Comment key={comment.id} comment={comment}/>
    })}
    </>
  )
}

export default QuestionPost