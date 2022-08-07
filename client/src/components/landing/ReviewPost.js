import React, { useEffect, useState } from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import Comment from './Comment'
import CommentForm from './CommentForm'

function ReviewPost() {
  const [review,setReview] = useState(null)
  const [comment,setComment] = useState("")
  const { id } = useParams()
  const { auth } = useUser()

  const fetchReviews = async (RId) => {
    const res = await fetch(`https://cars-nest.herokuapp.com/api/v1/reviews/${RId}`)
    const data = await res.json()
    setReview(data)
  }

  useEffect(()=>{  fetchReviews(id) },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("https://cars-nest.herokuapp.com/api/v1/revcomments",{
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        description: comment,
        upvotes: 0,
        downvotes: 0,
        review_id: id
      })
    })
    .then(res => res.json())
    .then(data => onAddComment(data))
  }

  const handleChange = (event) =>{
    setComment(event.target.value)
  }

  const onAddComment = (updatedComment)=>{
    const updatedReview = {
      ...review,
      revcomments : [
        ...review.revcomments,
        updatedComment
      ]
    }
    setReview(updatedReview)
  }

  return (
    <>
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 mt-2">
      <div className="h-56 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <img className="w-full" src={review && review.image} alt="car"/>
      </div>
      <div className="bg-white p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{review && review.title}</div>
          <p className="text-gray-700 text-base">{review && review.description}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{review && review.user.username}</p>
            <div className="pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsUp className="inline mr-2"/>{review && review.upvotes}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsDown className="inline mr-2"/>{review && review.downvotes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue px-6 py-4">comments</div>
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 mt-2">
    {review && review.revcomments.map((comment)=>{
      return <Comment key={comment.id} comment={comment}/>
    })}</div>
    <div>{auth ? <CommentForm handleChange={handleChange} handleSubmit={handleSubmit}/> : null }</div>
    </>
  )
}

export default ReviewPost