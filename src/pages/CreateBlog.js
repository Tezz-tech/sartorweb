import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import "../styles/create.css";
import { useNavigate } from "react-router-dom";

function CreateBlog({ setErr }) {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImageToCloudinary = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "sartor_blogs");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dpovvguw5/image/upload", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Cloudinary upload failed: ${errorText}`);
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (title === "" || story === "" || !image) {
      alert("Please fill in all fields");
      setErr(true);
      return;
    }

    setLoading(true);
    try {
      const imageUrl = await uploadImageToCloudinary();

      const postData = {
        title,
        body: story,
        img: imageUrl
      };

      const sendRes = await fetch("https://sator-backend-4.onrender.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!sendRes.ok) {
        throw new Error("Failed to create post");
      }

      const post = await sendRes.json();
      alert("Post Successful");
      console.log("New post:", post);

      setTitle('');
      setStory('');
      setImage(null);
      navigate("/blogs");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main2">
      <Container>
        <input
          type="text"
          className='title'
          placeholder='Give Your Post A Unique Title ...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="content">
          {image && <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: '100%' }} />}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder='Add A Comment ...'
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
        </div>
        <button className='post' onClick={handlePost} disabled={loading}>
          {loading ? "Uploading..." : "Upload Your Post"}
        </button>
      </Container>
    </div>
  );
}

export default CreateBlog;
