import React from 'react'

function DisplayCard() {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title</div>
        <p className="text-gray-700 text-base">
          Description
        </p>
        <div className="font-bold text-xl mb-2">Username</div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">Comments</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-800 mr-2 mb-2">Votes</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tag</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tag</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tag</span>
      </div>
    </div>
    </>
  )
}

export default DisplayCard