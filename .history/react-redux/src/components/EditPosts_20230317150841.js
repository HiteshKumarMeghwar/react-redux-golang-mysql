import React from 'react'
import { useParams } from "react-router-dom";

const EditPosts = () => {
  const object = useParams(); // assuming the URL has a parameter named "object"
  console.log(object)
  return (
    <div>
      <h1>EditPosts</h1>
    </div>
  )
}

export default EditPosts
