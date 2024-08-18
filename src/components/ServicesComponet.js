import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineBusiness } from 'react-icons/md';
import { TbBrandAmazon } from 'react-icons/tb';
import { FaChartLine } from 'react-icons/fa6';
import { MdLeaderboard } from 'react-icons/md';
import { SlTrophy } from 'react-icons/sl';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    // Optionally clean up AOS on component unmount
    return () => {
      AOS.refresh();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container-fluid sartor-pad3">
      <div className="">
        <div className="row justify-content-between text-center">
          <div
            className="col-md-5 p-5 bg-white shadow me-4 mb-sm-3 sartor-sm-mb"
            data-aos="zoom-in"
          >
            <MdOutlineBusiness style={{ fontSize: "60px" }} />
            <h2 data-aos="zoom-out">Start a Business</h2>
            <p>Don’t know where or how to start?</p>
            <p>Business plans</p>
            <p>Business registration</p>
            <p>Business lunch</p>
            <p>We’ve got you covered!</p>
            <button style={{backgroundColor: "#182659", padding: "15px 25px", borderRadius:"15px", border: "none"}} className="book"><a style={{textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "bold"}} href="https://calendar.app.google/A7b9Pyojjv1rj6sc7">Get Started</a></button>
          </div>
          <div
            className="col-md-5 p-5 bg-white shadow mb-sm-3 sartor-sm-mb"
            data-aos="zoom-in"
          >
            <TbBrandAmazon style={{ fontSize: "60px" }} />
            <h2 data-aos="zoom-out">Build A Brand</h2>
            <p>Build your identity to gain trust and loyal customers.</p>
            <p>Brand Audit</p>
            <p>Brand Strategy</p>
            <p>
              We ensure your business shines by analyzing, refining, and optimizing every facet of your business for a lasting brand impact.
            </p>
            <button style={{backgroundColor: "#182659", padding: "15px 25px", borderRadius:"15px", border: "none"}} className="book"><a style={{textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "bold"}} href="https://calendar.app.google/A7b9Pyojjv1rj6sc7">Get Started</a></button>
          </div>
          <div
            className="col-md-5 p-5 bg-white shadow me-4 mb-sm-3 sartor-sm-mb"
            data-aos="zoom-in"
          >
            <FaChartLine style={{ fontSize: "60px" }} />
            <h2 data-aos="zoom-out">Grow Your Business</h2>
            <p>Fuel your prosperity through tailored services such as;</p>
            <p>Strategic planning Innovation</p>
            <p>Market Research & Analysis</p>
            <p>Sales & Marketing Strategy</p>
            <p>Deals</p>
            <p>Partnerships and more</p>
            <button style={{backgroundColor: "#182659", padding: "15px 25px", borderRadius:"15px", border: "none"}} className="book"><a style={{textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "bold"}} href="https://calendar.app.google/A7b9Pyojjv1rj6sc7">Get Started</a></button>
          </div>
          <div
            className="col-md-5 p-5 bg-white shadow mb-sm-3 sartor-sm-mb"
            data-aos="zoom-in"
          >
            <SlTrophy style={{ fontSize: "60px" }} />
            <h2 data-aos="zoom-out">Become a Leader</h2>
            <p>Lead and others will follow</p>
            <p>Leadership Development</p>
            <p>Industry-Specific Focus</p>
            <p>Personalized programs to enhance your leadership skills.</p>
            <p>Strategic guidance to help you become an industry leader.</p>
            <button style={{backgroundColor: "#182659", padding: "15px 25px", borderRadius:"15px", border: "none"}} className="book"><a style={{textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "bold"}} href="https://calendar.app.google/A7b9Pyojjv1rj6sc7">Get Started</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
