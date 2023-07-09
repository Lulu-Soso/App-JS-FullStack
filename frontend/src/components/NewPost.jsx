import React, {useState} from 'react';
import axios from "axios";

const NewPost = ({userId}) => {
  const [message, setMessage] = useState("")
  const handleForm = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/post/', {
      message: message,
      author: userId
    }).then(r => "")

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
