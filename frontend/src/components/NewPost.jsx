import React, {useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {createPost, getPosts} from "../feature/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("")
  const userId = useSelector((state) => state.user.userId)
  const dispatch = useDispatch()
  const handleForm = (e) => {
    e.preventDefault()

    const data = {
      message,
      author: userId,
      // Créer un ID provisoire en attendant le retour de la BDD
      _id: Date.now(),
    }

    axios.post('http://localhost:5000/post/', data)
        .then(() => {
          dispatch(createPost(data))
          // getPost car il faut aller chercher de l'ID crée par MongoDB
          dispatch(getPosts())
        })

    // Effacer le message après l'envoi
    setMessage("")
  }

  return (
      <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
        <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Quoi de neuf ?" value={message}></textarea>
        <input type="submit" value="Envoyer"/>
        {message}
      </form>
  );
};

export default NewPost;
