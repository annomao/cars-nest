import React from 'react'
import { FaArrowRight,FaUpload } from 'react-icons/fa'

function PostBaseForm(props) {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue">{props.title}</div>
        <div className="mt-10">
        <form onSubmit={handleFileUpload}>
        <div className="flex flex-col mb-6">
            <input accept="image/*"
            id="image" 
            type="file" 
            name="image" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            onChange={props.handleUpload}
            />
        </div>
        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue hover:bg-grey-800 py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Upload</span>
            <span><FaUpload/></span>
          </button>
        </div>
        </form>
        <form onSubmit={props.handleSubmit}>
        <div className="flex flex-col mb-6">
            <input 
            id="title" 
            type="text" 
            name="title" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            placeholder="Enter title..." 
            onChange={props.handleChange}
            />
        </div>
        <div className="flex flex-col mb-6">
            <textarea cols="50" rows="5"
            id="description" 
            name="password" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            placeholder="Enter Description" 
            onChange={props.handleChange}
            ></textarea>
        </div>
        <div className="flex flex-col mb-6">
            <input 
            id="categories" 
            type="text" 
            name="categories" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            onChange={props.handleChange}
            />
        </div>
        <div className="flex flex-col mb-6">
            <input 
            id="image" 
            type="file" 
            name="image" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            onChange={props.handleUpload}
            />
        </div>
        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue hover:bg-grey-800 py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Submit</span>
            <span><FaArrowRight/></span>
          </button>
        </div>
      </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default PostBaseForm