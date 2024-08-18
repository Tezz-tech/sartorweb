import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/singleBlog.css"
import moment from "moment";
import Img1 from "../assets/images/logo.webp"


const SingleBlog = () => {
  const { id } = useParams();
  const userProfile = JSON.parse(localStorage.getItem("blogUserProfile"));
  const userID = userProfile?._id || '';

  const [singlePost, setSinglePost] = useState({});
  const [profileName, setProfileName] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch post details
        const postResponse = await fetch(`https://sator-backend-4.onrender.com/posts/${id}`);
        if (!postResponse.ok) {
          throw new Error("Failed to fetch post data");
        }
        const postData = await postResponse.json();
        setSinglePost(postData);

        // Fetch user profile
        const userResponse = await fetch(`https://sator-backend-4.onrender.com/users/${postData.user_id}`);
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await userResponse.json();
        setProfileName(userData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="single">
        <Container>
          
          <h3 className="head">{singlePost.title}</h3>
          <p className="date">{moment(singlePost.created_at).format("D MMMM YYYY")}</p>
          <div className="blogimg">
            <img
              src={singlePost.img ? `${singlePost.img}` : "default-image-url"}
              alt={singlePost.title}
            />
          </div>
          <p className="comm">{singlePost.body}</p>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
