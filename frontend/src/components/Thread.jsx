import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./Post";

const Thread = ({userId}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/post/")
        .then((res) => setPosts(res.data))
  }, [])

  return (
      <div className="thread-container">
        {posts
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt)) // compare la date qui est une chaîne de caractère de la plus récente à la plus ancienne
            .map((post) => (
            <Post key={post._id} post={post} userId={userId}/>
        ))}
      </div>
  );
};
export default Thread;
