import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/singleBlog.css";
import moment from "moment";
import Img1 from "../assets/images/logo.webp";

function SingleBlog() {
  const { id } = useParams();
  const userProfile = JSON.parse(localStorage.getItem("blogUserProfile"));
  const userID = userProfile?._id || "";

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
          <p className="date">{moment(singlePost.createdAt).format("D MMMM YYYY")}</p>
          
          {/* Render sections dynamically */}
          <div className="blog-content">
            {singlePost.sections && singlePost.sections.map((section, index) => {
              if (section.type === 'paragraph') {
                return <p key={index} className="blog-paragraph">{section.content}</p>;
              }
              if (section.type === 'subheading') {
                return <h4 key={index} className="blog-subheading">{section.content}</h4>;
              }
              if (section.type === 'bullet') {
                return <li key={index} className="blog-bullet">{section.content}</li>;
              }
              if (section.type === 'image') {
                return (
                  <div key={index} className="blogimg">
                    <img
                      src={section.content ? section.content : "default-image-url"}
                      alt={`section-img-${index}`}
                    />
                  </div>
                );
              }
              return null; // Handle any unexpected section types
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default SingleBlog;
