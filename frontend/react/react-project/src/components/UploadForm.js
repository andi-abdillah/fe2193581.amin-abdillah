// TODO: answer here
import React from "react";
import axios from "axios";
import { API_URL } from "../api/config";

export default function UploadForm({onSubmit}) {
  // TODO: answer here
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await axios.post(`${API_URL}/post/create`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    onSubmit(response.data.data);
  };


  return (
    <div className="UploadForm" aria-label="Upload Form" href="/upload">
      <form onSubmit={onSubmit}>
        <input type="file" aria-label="Image Input" accept="image/png, image/jpg, image/gif"/>
        <input type="text" aria-label="Caption Input" placeholder="Write Caption..."/>
        <button type="submit" aria-label="Submit Button">Upload</button>
      </form>
    </div>
  )
}