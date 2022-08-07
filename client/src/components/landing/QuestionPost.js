import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import Comment from './Comment'
import CommentForm from './CommentForm'

function QuestionPost() {
  const [question,setQuestion] = useState(null)
  const [errors,setErrors] = useState([])
  const [comment, setComment] = useState("")
  const { id } = useParams()
  const { auth } = useUser()

  const fetchQuestions = async (QId) => {
    const res = await fetch(`https://cars-nest.herokuapp.com/api/v1/questions/${QId}`)
    const data = await res.json()
    setQuestion(data)
  }

  useEffect(()=>{ fetchQuestions(id) },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("https://cars-nest.herokuapp.com/api/v1/quecomments",{
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        description: comment,
        upvotes: 0,
        downvotes: 0,
        question_id : id,
        user_id: auth.id
      })
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => {
          onAddComment(data)
        })
      }else{
        res.json().then((err) => setErrors(err.errors));
      }
    })
    setComment("")
  }

  const handleChange = (event)=>{
    setComment(event.target.value)
  }

  const onAddComment = (updatedComment)=>{
    const updatedQuestion = {
      ...question,
      quecomments : [
        ...question.quecomments,
        updatedComment
      ]
    }
    setQuestion(updatedQuestion)
  }

  const onVoteComment = (updatedComment) => {
    const commentList = question.quecomments.map((q)=>{
      if(q.id === updatedComment.id){
        return updatedComment
      }else{
        return q
      }
    })
    const updatedQuestion = {
      ...question,
      quecomments: commentList
    }

    setQuestion(updatedQuestion)
  }
  console.log(question)


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
      return <Comment key={comment.id} comment={comment} onCommentVote={onVoteComment} url="https://cars-nest.herokuapp.com/api/v1/quecomments"/>
    })}</div>
    <div>{auth ? <CommentForm handleChange={handleChange} handleSubmit={handleSubmit} errors={errors}/> : null }</div>
    
    </>
  )
}

export default QuestionPost