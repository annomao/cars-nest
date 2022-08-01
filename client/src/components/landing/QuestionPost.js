import React from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'

function QuestionPost() {
  return (
    <>
    <div className="">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-xl font-bold">
          comment: I have a 150cc gy6s chinese scooter my starter clutch went out so i 
          replaced it now all it does is click at the solonoid
        </p>
        <div className="text-base mb-2">Username</div>
      <div className="pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tag1</span>
      </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsUp/></span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsDown/></span>
      </div>
    </div>
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue px-6 py-4">comments</div>
    </>
  )
}

export default QuestionPost