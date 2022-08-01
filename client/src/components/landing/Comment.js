import React from 'react'
import { FaThumbsDown,FaThumbsUp } from 'react-icons/fa'

function Comment() {
  return (
    <>
    <div className="border-b border-cBlue overflow-hidden">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          comment: I have a 150cc gy6s chinese scooter my starter clutch went out so i 
          replaced it now all it does is click at the solonoid
        </p>
        <div className="text-base mb-2">Username</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsUp/></span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaThumbsDown></FaThumbsDown></span>
      </div>
    </div>
    </>
  )
}

export default Comment