// TODO: answer here
import React from "react";
import axios from "axios";
import { API_URL } from "../api/config";

export default function UploadForm({onSubmit}) {
  // TODO: answer here
  return (
    <div className="UploadForm" aria-label="Upload Form" href="/upload">
      <form onSubmit={onSubmit}>
        <input type="file" aria-label="Image Input" accept="image/png, image/jpg, image/gif"/>
        <input type="text" aria-label="Caption Input" placeholder="Write Caption..."/>
        <button type="submit" aria-label="Submit Button" buttonOnClick="" >Upload</button>
      </form>
    </div>
  )
}