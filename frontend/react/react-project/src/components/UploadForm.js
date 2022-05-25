// TODO: answer here
import React from "react";
import axios from "axios";
import { API_URL } from "../api/config";
import { useState } from "react";

export default function UploadForm({onSubmit}) {
  // TODO: answer here
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
 
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("content", content);
 
    axios.post(`${API_URL}/post/create`, formData, {
      withCredentials: true,
    })
  }  
 
  const handleImageChange = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    setImage(file)
  }
 
  const handleContentChange = (e) => {
    e.preventDefault()
    const content = e.target.value
    setContent(content)
  }

  return (
    <div className="UploadForm" aria-label="Upload Form" href="/upload">
      <form onSubmit={handleSubmit}>
        <input type="file" aria-label="Image Input" accept="image/png, image/jpg, image/gif"
          onChange={handleImageChange}
        />
        <input type="text" aria-label="Caption Input" placeholder="Write Caption..."
          onChange={handleContentChange}
        />
        <button type="submit" aria-label="Submit Button">Upload</button>
      </form>
    </div>
  )
}