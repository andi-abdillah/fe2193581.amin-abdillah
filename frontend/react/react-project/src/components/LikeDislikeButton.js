// TODO: answer here
import React, {useState} from "react"
import { API_URL } from "../api/config";
import axios from "axios";

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here
    const [likes, setLikes] = useState(likeCount);
    const [dislikes, setDislikes] = useState(dislikeCount);
    const [isLikedState, setIsLikedState] = useState(isLiked);
    const [isDislikedState, setIsDislikedState] = useState(isDisliked);

    return (
        <div className="LikeButton">
            <div>
                <button aria-label="Like Button"
                onClick={()=>{
                    if (isLikedState) {
                        axios.get(`${API_URL}/post/123/unlike`, { withCredentials: true})
                        setLikes(likes - 1);
                        setIsLikedState(false);
                    } else {
                        axios.get(`${API_URL}/post/123/like`, { withCredentials: true})
                        setLikes(likes + 1);
                        setIsLikedState(true);
                        if(isDislikedState) {
                            setDislikes(dislikes - 1);
                            setIsDislikedState(false);
                        }
                    }
                }}
                >Like</button>
                <span aria-label="Like Count">{likes}</span>
            </div>

            <div>
                <button aria-label="Dislike Button"
                onClick={()=>{
                    if (isDislikedState) {
                        axios.get(`${API_URL}/post/123/undislike`, { withCredentials: true})
                        setDislikes(dislikes - 1);
                        setIsDislikedState(false);
                    } else {
                        axios.get(`${API_URL}/post/123/dislike`, { withCredentials: true})
                        setDislikes(dislikes + 1);
                        setIsDislikedState(true);
                        if(isLikedState) {
                            setLikes(likes - 1);
                            setIsLikedState(false);
                        }
                    }
                }}
                >Dislike</button>
                <span aria-label="Dislike Count">{dislikes}</span>
            </div>
        </div>
    )
}