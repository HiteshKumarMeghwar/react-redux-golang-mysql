import React from 'react'
import { useParams } from "react-router-dom";

const EditPosts = () => {
  const id = useParams(); // assuming the URL has a parameter named "id"
  console.log(id)
  return (
    <div>
      <h1>EditPosts</h1>
    </div>
  )
}

export default EditPosts
