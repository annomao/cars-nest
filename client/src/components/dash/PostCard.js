import React, {useState} from 'react'
import { MdDeleteOutline, MdOutlineEditNote } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import EditPost from './EditPost'

function PostCard({post, url, onEdit}) {

  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()

  function handleDelete(){
    fetch(url,{
      method:"DELETE"
    })
    navigate("/questions")
    }

  return (
    <>
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <img className="w-full" src={post.image} alt="car"/>
        <div className="font-normal text-xl mb-2">
          </div>
        {
          isEditing ? <EditPost post={post} isEditing={isEditing} setIsEditing={setIsEditing} url={url} onEdit={onEdit}/> :
          <>          
          <div className="font-normal text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">
            {post.description}
          </p>
        </>
        }
        
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-bold text-gray-900 mr-2 mb-2"><MdOutlineEditNote/></span>
        </button>
        <button onClick={handleDelete}>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-bold text-gray-900 mr-2 mb-2"><MdDeleteOutline/></span>
        </button>
      </div>
    </div>
    </>
  )
}

export default PostCard