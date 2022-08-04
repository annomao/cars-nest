import React from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'

function Comment({comment}) {
  return (
    <>
    <div className="border-b border-cBlue overflow-hidden">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          {comment.description}
        </p>
        <div className="text-base mb-2">{comment.user.username}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsUp/> {comment.upvotes}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsDown/> {comment.downvotes}</span>
      </div>
    </div>
    </>
  )
}

export default Comment