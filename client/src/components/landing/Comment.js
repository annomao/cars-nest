import React from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'

function Comment({comment, url, onCommentVote}) {

  const handleDownvote = () =>{
    fetch(`${url}/${comment.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        downvotes : parseInt(comment.downvotes) - 1
      })
    })
    .then(res => res.json())
    .then(data => onCommentVote(data))
  }

  const handleUpvote = () =>{
    fetch(`${url}/${comment.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        downvotes : parseInt(comment.upvotes) + 1
      })
    })
    .then(res => res.json())
    .then(data => onCommentVote(data))
  }

  return (
    <>
    <div className="border-b border-cBlue overflow-hidden">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          {comment.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleUpvote}>
          <FaThumbsUp className="inline mr-2"/> {comment.upvotes}</button>
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleDownvote}>
          <FaThumbsDown className="inline mr-2"/> {comment.downvotes}</button>
      </div>
    </div>
    </>
  )
}

export default Comment