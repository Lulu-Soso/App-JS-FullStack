import React, {useEffect, useState} from 'react';
import LikePost from "./LikePost";
import axios from "axios";
import DeletePost from "./DeletePost";
import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../feature/post.slice";

const Post = ({post}) => {
  // console.log(post, userId)
  const [isAuthor, setIsAuthor] = useState(false)
  const [isEdit, setIsEdit] = useState(false) // false car de base, l'utilisateur n'est pas en train d'éditer
  const [newMessage, setNewMessage] = useState("")
  const userId = useSelector((state) => state.user.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (post.author === userId) {
      setIsAuthor(true)
    } else {
      setIsAuthor(false)
    }
  }, [userId])

  const handleEdit = () => {
    if (newMessage) {
      axios.put("http://localhost:5000/post/" + post._id, {
        message: newMessage,
      }).then(r => "")
      dispatch(editPost([newMessage, post._id]))
    }
  }

  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
  }

  return (
      <div className="card">
        <div className="card-header">
          <h3>{post.author}</h3>
          <p>posté le {dateFormater(post.createdAt)}</p>
        </div>
        {isEdit ? (
            <div className="edit-container">
              <textarea defaultValue={post.message} onChange={(e) => setNewMessage(e.target.value)}></textarea>
              <button onClick={() => {
                setIsEdit(false)
                handleEdit()
              }}>Valider édition
              </button>
            </div>
        ) : (
            <p>{newMessage ? newMessage : post.message}</p>
        )}
        <div className="icons-part">
          <LikePost post={post} userId={userId}/>
          {isAuthor && (
              <div className="update-delete-icons">
                {/*Une sorte de toggle car cela inverse au click*/}
                <span id="update-btn" onClick={() => {
                  setIsEdit(!isEdit)
                  handleEdit()
                }}>&#10000;</span>
                <DeletePost postId={post._id} />
              </div>
          )}
        </div>
      </div>
  );
};

export default Post;
