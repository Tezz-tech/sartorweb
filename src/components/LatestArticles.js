import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Helper function to format the date
const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};

// Helper function to truncate text
const truncateText = (text, length = 100) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from your API
    fetch('https://sator-backend-4.onrender.com/posts') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        // Filter out articles without images and reverse the array
        const filteredArticles = data;
        setArticles(filteredArticles);
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="container-fluid bg-body-tertiary sartor-pad2">
      <div className="container p-5">
        <div className="text-center pb-3" data-aos="zoom-in">
          <h4 className="fs-5">INSIGHTS</h4>
          
          <h2 className="fs-1 mb-3">Latest Articles</h2>
          <p>
            Get informative and enlightening articles to help you grow your
            business today
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
  {articles.map((article) => {
    // Find the first image section and first paragraph section
    const imageSection = article.sections.find((section) => section.type === 'image');
    const paragraphSection = article.sections.find((section) => section.type === 'paragraph');
    
    // Format the createdAt date (example: '14th September 2024')
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-GB', options);
    };

     // Truncate text function
     const truncateText = (text, limit) => {
      return text.length > limit ? text.substring(0, limit) + '...' : text;
     }

    return (
      <div className="col" key={article._id}>
        <div className="card border-0 shadow" data-aos="fade-down-right">
          {imageSection && (
            <img
              src={imageSection.content}
              className="card-img-top sartor-height"
              alt={article.title}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            {paragraphSection && (
              <p className="card-text">
                {truncateText(paragraphSection.content, 100)} {/* Truncate to 100 characters */}
              </p>
            )}
            <p className="small text-muted">{formatDate(article.createdAt)}</p>
            <Link
              to={`/blog/${article._id}`}
              className="link text-decoration-none fw-medium sartor-txt-green"
            >
              Read More »
            </Link>
          </div>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default LatestArticles;
