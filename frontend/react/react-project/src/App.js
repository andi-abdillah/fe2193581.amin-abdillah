import "./App.css"
// TODO: answer here
import React from "react"
import { useEffect, useState } from 'react';
import axios from "axios";
import POST_URL from "./api/post";
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import UploadForm from "./components/UploadForm"

function App() {
  // TODO: answer here
  const [postList, setPostlist] = useState([]);

  const getPostData = async () => {
    try {
      const response = await axios.get(POST_URL.API_URL, { withCredentials: true});
      console.log(response);
      setPostlist(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);
  
  // console.log(postList)
  // console.log(axios.get(`${API_URL}/post/list`, { withCredentials: true}))
  return (
    <div aria-label="App">
      <h1 aria-label="App Title"></h1>
      <Navbar />
      {postList.map((item) => {
        return (
          <PostCard
            item = {item}
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
