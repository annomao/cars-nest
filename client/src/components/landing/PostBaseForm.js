import React from 'react'
import { FaArrowRight} from 'react-icons/fa'

function PostBaseForm(props) {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-cBlue">{props.title}</div>
        <div className="mt-10 mb-6 p-4">
        <div className="flex flex-col mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
          Image Upload
          </label>
          <input type="file" accept="image/*"
            name="image" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            onChange={props.handleUpload}
            />
            <button onClick={props.handleImgUpload} 
            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base w-9/12 bg-cBlue hover:bg-grey-800 py-2 mt-2 transition duration-150 ease-in">
              Upload Image
           </button>

          {props.progress > 0 && props.progress < 100 ? (
              <span className="text-red-600">
                {`Uploading... ${props.progress}%`}
              </span>
            ) : props.progress === 100 ? (
              <span className="text-green-600">Upload complete</span>
            ) : null}
        </div>
        <form className="mt-6" onSubmit={props.handleSubmit}>
        <div className="flex flex-col mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
          </label>
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
          <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
          </label>
          <textarea cols="50" rows="5"
            id="description" 
            name="description" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            placeholder="Enter Description" 
            onChange={props.handleChange}
            ></textarea>
        </div>
        <div className="flex flex-col mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="categories">
          Enter comma separated categories/tags
          </label>
          <input 
            id="categories" 
            type="text" 
            name="categories" 
            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 border-b border-cBlue bg-neutral-100 w-full py-2 focus:outline-none focus:border-blue-400" 
            placeholder="Enter categories"
            onChange={props.handleChange}
            />
        </div>
        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-cBlue hover:bg-grey-800 py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Submit</span>
            <span><FaArrowRight/></span>
          </button>
        </div>
      </form>
      {props.errors.map((err) => (
          <p  className="text-red-600 text-base" key={err}>{err}</p>
        ))}
        </div>
        </div>
      </div>
    </>
  )
}

export default PostBaseForm