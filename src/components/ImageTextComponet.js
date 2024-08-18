import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageTextComponent = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="mt-5 mb-5" ></div>
        {/* Left 60% for the image on large screens, 100% on smaller screens */}
        <div className="col-lg-6 col-md-12">
          <img
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Your Image"
            className="img-fluid"
            style={{ width: '130%', height: 'auto' }}
          />
        </div>
        {/* Right 40% for centralized text */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <div>
            <h1>Get Insights & Dial Into Your Market To Achieve Success</h1>
            <p style={{fontSize: "20px"}}>We understand that the business landscape is constantly evolving that’s why we study changes and advancements in technologies, policies, and macro-economy to enable us to navigate the business landscape to achieve our objectives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
