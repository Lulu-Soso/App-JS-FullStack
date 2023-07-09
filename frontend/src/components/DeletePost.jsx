import React from 'react';
import axios from "axios";

const DeletePost = ({postId}) => {
  // console.log(postId)
  const handleDelete = () => {
    axios.delete("http://localhost:5000/post/" + postId).then(r => "")
  }

  return (
      <span id="delete-btn" onClick={() => handleDelete()}>&#10010;</span>
  );
};

export default DeletePost;
