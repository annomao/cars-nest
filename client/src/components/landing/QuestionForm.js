import React, { useState } from 'react'
import PostBaseForm from './PostBaseForm'

function QuestionForm() {
  const [question, setQuestion] = useState({})
  const [image, setImage] = useState("")
  const [imgUrl, setImgUrl] = useState(null)

  function handleUpload(e){
    setImage(e.target.files[0])
  }

  function handleFileUpload(e){
    e.preventDefault()
  }

  function handleChange(e){
    setQuestion({
      ...question,
      [e.target.name]: e.target.value 
    })
  }

  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <>
    <PostBaseForm 
    handleChange={ handleChange }
    handleupload={ handleUpload }
    handleSubmit= { handleSubmit }
    handleFileUpload = {handleFileUpload}
    />
    </>
  )
}

export default QuestionForm