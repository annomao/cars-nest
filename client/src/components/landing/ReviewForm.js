import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handleImageUpload from '../../firebase/firebase'
import PostBaseForm from './PostBaseForm'

function ReviewForm() {
  const [review, setReview] = useState({})
  const [file, setFile] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [errors, setErrors] = useState([])
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  function handleUpload(e){
    setFile(e.target.files[0])
    console.log(e)
    
  }

  function handleImgUpload(){
    console.log(file)
    if(!file){
      alert("Kindly choose an image file before proceeding")
    }
    else{
      handleImageUpload(file, setImgUrl,setProgress)
    }
  }

  function handleChange(e){
    setReview({
      ...review,
      [e.target.name]: e.target.value 
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const reviewData = {
      ...review,
      image: imgUrl,
      upvotes:0,
      downvotes:0
    }
    fetch("https://cars-nest.herokuapp.com/api/v1/reviews",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(reviewData)
    }
    )
    .then(res => {
      if (res.ok){
        res.json()
        .then( review => {
          navigate("/review")
        })
      }else{
        res.json().then((err) => setErrors(err.errors));
      }
    })
  }
  return (
    <>
    <PostBaseForm 
    title = "Add a Car Review"
    errors = {errors}
    handleChange={ handleChange }
    handleUpload={ handleUpload }
    handleSubmit= { handleSubmit }
    handleImgUpload = {handleImgUpload}
    progress = {progress}
    />
    </>
  )
}

export default ReviewForm