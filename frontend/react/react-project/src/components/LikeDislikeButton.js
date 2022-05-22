// TODO: answer here
import React, {useState} from "react"
import { API_URL } from "../api/config";
import axios from "axios";

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) {
    // TODO: answer here
    const [likes, setLikes] = useState(likeCount);
    const [dislikes, setDislikes] = useState(dislikeCount);

    return (
        <div className="LikeButton">
            <div>
                <button aria-label="Like Button"
                onClick={()=>{
                    if (isLiked) {
                        setLikes(likes - 1);
                    } else if(isDisliked) {
                        setLikes(likes + 1);
                        setDislikes(dislikes - 1);
                    } else {
                        setLikes(likes + 1);;
                    }
                }}
                >Like</button>
                <text aria-label="Like Count">{likes}</text>
            </div>

            <div>
                <button aria-label="Dislike Button"
                onClick={()=>{
                    if (isDisliked) {
                        setDislikes(dislikes - 1);
                    } else if (isLiked) {
                        setDislikes(dislikes + 1);
                        setLikes(likes - 1);
                    } else {
                        if(likes > 0) {
                            setDislikes(dislikes + 1);
                            setLikes(likes - 1);
                        }
                        if (likes === 0) {
                            setDislikes(dislikes + 1);
                            setLikes(likes - 0);
                        }
                    }
                }}
                >Dislike</button>
                <text aria-label="Dislike Count">{dislikes}</text>
            </div>
        </div>
    )
}