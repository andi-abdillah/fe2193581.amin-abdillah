// TODO: answer here
import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../api/config';
import LikeDislikeButton from './LikeDislikeButton';

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  const [isLiked] = useState(false);
  const [isDisliked] = useState(false);
  const [likes] = useState(0);
  const [dislikes] = useState(0);

  return (
    <div>
      <div aria-label="Post Card">
        <div>
          <img aria-label="Post Image" src={image} alt="Post" />
        </div>
        <div>
          <a aria-label="Post User Name" href="">
            {username}
          </a>
          <p aria-label="Post Date" >{date}</p>
        </div>
        <div>
          <LikeDislikeButton
            likeCount={likes}
            dislikeCount={dislikes}
            isLiked={isLiked}
            isDisliked={isDisliked}
          />
          <p aria-label="Post Caption">{caption}</p>
        </div>
      </div>
    </div>
  )
}
