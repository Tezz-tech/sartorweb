import React from "react";
import "../styles/home.css";
import sartorVid from "../assets/images/sartor-video.mp4"

export default function HomeBanner() {
  return (
    <div className="container-fluid">
    <div className="home-banner1">
      <video autoPlay loop muted className="background-video">
        <source src={sartorVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container text-container2">
        <div className="row">
          <div className="col-md-6">
            <h1> Management Consulting and Technology at it’s finest.</h1>
            <p>Welcome to Sartor Limited, your trusted partner in management
      consulting and technology solutions.</p>
      <p> At Sartor, we specialize in
      empowering entrepreneurs and managers of Small and Medium
      Enterprises (SMEs) to turn their vision into reality.</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
