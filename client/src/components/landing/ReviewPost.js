import React from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'
import Comment from './Comment'

function ReviewPost({review}) {

  return (
    <>
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-56 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${review.image})`}}>
      </div>
      <div className="border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{review.title}</div>
          <p className="text-gray-700 text-base">{review.description}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{review.user.username}</p>
            <div className="pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsUp/> {review.upvotes}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsDown/> {review.downvotes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue px-6 py-4">comments</div>
    {review.revcomments.map((comment)=>{
      return <Comment key={comment.id} comment={comment}/>
    })}
    </>
  )
}

export default ReviewPost