import React, {useEffect, useState} from 'react';
import axios from "axios";

const LikePost = ({post, userId}) => {
  const [userLiked, setUserLiked] = useState(false) // On part du principe que l'utilisateur n'a jamais liké donc false

  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {// Si l'id de l'utilisateur existe dans le tableau des likers
        setUserLiked(true);
      } else {
        setUserLiked(false)
      }
      console.log(userLiked)
    }
  }, [userId])
  const likePost = () => {
    axios.patch("http://localhost:5000/post/like-post/" + post._id, {userId}).then(r => "")
    setUserLiked(true)
  }

  const dislikePost = () => {
    axios.patch("http://localhost:5000/post/dislike-post/" + post._id, {userId}).then(r => "")
    setUserLiked(false)
  }

  return (
      <div className="like-icon">
        <p>{post.likers ? post.likers.length : 0}</p>
        {userLiked ? (
            <span id="like-btn" onClick={() => dislikePost()}>&#9829;</span>
        ) : (
            <span id="dislike-btn" onClick={() => likePost()}>&#9829;</span>
        )}
      </div>
  );
};

export default LikePost;
