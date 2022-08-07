import React from 'react'

function CommentForm({handleChange,handleSubmit,errors}) {

  return (
    <div className="w-full max-w-lg">
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue">Add a comment</div>
      <div className="flex flex-col mb-6">
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span></span>
            </div>
            <textarea cols="50" rows="5" id="comment" name="comment" onChange={handleChange}
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 py-2 focus:outline-none w-full focus:border-blue-400" placeholder="Add a comment...">
            </textarea>
          </div>
        </div>
        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue w-1/2 hover:bg-grey-800 py-2 transition duration-150 ease-in">
            <span className="mr-2 uppercase">Post Comment</span>
            <span></span>
          </button>
        </div>
    </form>
    {errors.map((err) => (
          <p  className="text-red-600 text-base" key={err}>{err}</p>
        ))}
    </div>
  )
}

export default CommentForm