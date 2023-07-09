import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../feature/post.slice";

const Thread = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.postsData)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
      <div className="thread-container">
        {posts && posts
            .slice()
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt)) // compare la date qui est une chaîne de caractère de la plus récente à la plus ancienne
            .map((post) => (
            <Post key={post._id} post={post} />
        ))}
      </div>
  );
};
export default Thread;
