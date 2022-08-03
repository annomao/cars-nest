import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import handleImageUpload from '../../firebase/firebase'
import PostBaseForm from './PostBaseForm'

function QuestionForm() {
  const [question, setQuestion] = useState({})
  const [image, setImage] = useState("")
  const [imgUrl, setImgUrl] = useState(null)
  const [errors, setErrors] = useState([])

  const { auth } = useUser()
  const navigate = useNavigate()

  function handleUpload(e){
    setImage(e.target.files[0])
  }

  function handleFileUpload(){
    handleImageUpload(image, setImgUrl)
  }

  function handleChange(e){
    setQuestion({
      ...question,
      [e.target.name]: e.target.value 
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const questionData = {
      ...question,
      image: imgUrl,
      user_id: auth.id
    }
    fetch("https://cars-nest.herokuapp.com/api/v1/questions",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(questionData)
    }
    )
    .then(res => {
      if (res.ok){
        res.json()
        .then( question => {
          navigate("/question")
        })
      }else{
        res.json().then((err) => setErrors(err.errors));
      }
    })
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