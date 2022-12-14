import React, { useEffect, useState } from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import Comment from './Comment'
import CommentForm from './CommentForm'

function ReviewPost() {
  const [review,setReview] = useState(null)
  const [comment,setComment] = useState("")
  const [errors, setErrors] = useState([])
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
        review_id: id,
        user_id: auth.id
      })
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          onAddComment(data)
          setComment("")
        })
        }else{
          res.json().then((err) => setErrors(err.errors));
        }
      })
  }

  const handleChange = (event) =>{
    setComment(event.target.value)
  }

  const onUpvote = () => {
    fetch(`https://cars-nest.herokuapp.com/api/v1/reviews/${review.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        upvotes: parseInt(review.upvotes) + 1
      })
    })
    .then(res => res.json())
    .then(data => handleOnUpvote(data))
  }

  const handleOnUpvote = (updated) =>{
    setReview({
      ...review,
      upvotes: updated.upvotes
    })
  }

  const onDownvote = () => {
    fetch(`https://cars-nest.herokuapp.com/api/v1/reviews/${review.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        downvotes: parseInt(review.downvotes) + 1
      })
    })
    .then(res => res.json())
    .then(data => handleOnDownvote(data))
  }

  const handleOnDownvote = (updated) => {
    setReview({
      ...review,
      downvotes: updated.downvotes
    })
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

  const onVoteComment = (updatedComment) => {
    const commentList = review.revcomments.map((r)=>{
      if(r.id === updatedComment.id){
        return updatedComment
      }else{
        return r
      }
    })
    const updatedReview = {
      ...review,
      revcomments: commentList
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
            <p className="text-cGreen leading-none">{review && review.user.username}</p>
            <div className="pt-4 pb-2">
              <button className="inline-block bg-gray-200 text-cGreen rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={onUpvote}>
                <FaThumbsUp className="inline mr-2"/>{review && review.upvotes}</button>
              <button className="inline-block bg-gray-200 text-cGreen rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={onDownvote}>
                <FaThumbsDown className="inline mr-2"/>{review && review.downvotes}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue px-6 py-4">comments</div>
    <div className="p-2 mt-2">
    {review && review.revcomments.map((comment)=>{
      return <Comment key={comment.id} comment={comment} onCommentVote={onVoteComment} url={`https://cars-nest.herokuapp.com/api/v1/revcomments`}/>
    })}</div>
    <div>{auth ? <CommentForm handleChange={handleChange} handleSubmit={handleSubmit} errors={errors}/> : null }</div>
    </>
  )
}

export default ReviewPost