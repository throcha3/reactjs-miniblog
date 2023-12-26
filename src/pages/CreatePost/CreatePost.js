import styles from "./CreatePost.module.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formErrors, setFormErrors] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors("");

    //validate img url

    //create tags array

    //check every value

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    //redirect
  };

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div className={styles.create_post}>
      <h2>Create Post</h2>
      <p>Write about anything u want & share it</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Write a good title.."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Image URL</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Select a nice image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Body</span>
          <textarea
            name="body"
            required
            placeholder="Write a good body.."
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insert Tags separated by comma"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {response && !response.loading && <button className="btn">Save</button>}
        {response && response.loading && (
          <button className="btn" disabled>
            Wait
          </button>
        )}
        {response && response.error && (
          <p className="error">{response.error}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
