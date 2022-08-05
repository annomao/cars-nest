
import React, {useState} from 'react'

function EditPost({post,isEditing,setIsEditing,url,onEdit}) {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);

  function handleSubmit(event){
    event.preventDefault()

    fetch(url,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        title:title,
        description:description
      })
    })
    .then(res => res.json())
    .then((data)=>{
      onEdit(data)
      setIsEditing(() => isEditing = !isEditing)
    })
  }

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <form className="px-2" onSubmit={handleSubmit}>
      <label className="block text-base">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"
      />
      <label className="block text-base">Description</label>
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-base"
        rows={5}
      />
      <div className="flex items-baseline justify-between">
        <button className="px-4 py-2 mt-4 mb-4 text-white bg-cBlue rounded-lg hover:bg-base">Edit</button>             
      </div>
    </form>
    </div>
  )
}

export default EditPost