import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageTextComponentTwo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="mt-5 mb-5" ></div>
        {/* Right 40% for centralized text */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <div>
            <h1>Our Consultants Can Make The Difference Your Business Needs.</h1>
            <p style={{ fontSize: "20px" }}>
            As an entrepreneur you may feel stuck, you may not know or be able to do everything.
            </p>
          </div>
        </div>
        {/* Left 60% for the image on large screens, 100% on smaller screens */}
        <div className="col-lg-6 col-md-12">
          <img
            src="https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Your Image"
            className="img-fluid"
            style={{ width: "130%", height: "auto" }}
          />
        </div>
      <div className="mt-5 mb-5" ></div>
      </div>
    </div>
  );
};

export default ImageTextComponentTwo;
