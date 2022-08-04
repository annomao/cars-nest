import React from 'react'

function DisplayCard({post, handleClick}) {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={post.image} alt="car"/>
      <button className="px-6 py-4" onClick={handleClick}>
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">
          {post.summary}
        </p>
        <div className="font-base text-xl mb-2">{post.user.username}</div>
      </button>
      <div className="px-6 pt-4 pb-2">
        {post.categories.split(",").map((category)=>{
          return <span key={category} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
        })}
      </div>
    </div>
    </>
  )
}

export default DisplayCard