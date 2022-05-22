import "./App.css"
// TODO: answer here
import React from "react"
import { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from './api/config';
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import UploadForm from "./components/UploadForm"

function App() {
  // TODO: answer here
  const [postList, setPostlist] = useState([]);

  const getPostData = async () => {
    const response = await axios.get(`${API_URL}/post/list`, { withCredentials: true});
    setPostlist(response.data.data);
  };

  useEffect(() => {
    getPostData();
  }, []);
  
  // console.log(postList)

  return (
    <div aria-label="App">
      <h1 aria-label="App Title"></h1>
      <Navbar />
      {postList.map((item) => {
        return (
          <PostCard
            image = {item.image}
            caption = {item.content}
            username = {item.author.name}
            userId = {item.author.id}
            date = {item.createdAt}
          />
        )
      })}
      <div>
        <UploadForm />
      </div>
    </div>
  )
}

export default App
