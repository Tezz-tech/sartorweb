import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcIdea } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { VscBook } from "react-icons/vsc";

const WhyChooseUs = () => {
  return (
    <div className="container-fluid sartor-bg-blue sartor-pad3">
      <div className="container">
        <h1 className="text-center fs-3 mb-3 sartor-txt-white" data-aos="zoom-in">
          WHY CHOOSE US
        </h1>
        <div className="row text-center" data-aos="zoom-in">
          <div className="col p-5 mb-sm-5 me-md-1 bg-white mb-3">
            <FcIdea style={{fontSize: "60px"}}/>
            <h2>Innovative</h2>
            <p>
              We are continuously developing innovative ideas and strategies
              to adapt to the dynamic global and local business landscape.
            </p>
          </div>
          <div className="col p-5 mb-sm-5 bg-white mb-3">
            <FaUsers style={{fontSize: "60px"}}/>
            <h2>Experienced Team</h2>
            <p>
              Our team of strategists with industry knowledge are here to
              help you achieve your desired goals.
            </p>
          </div>
        </div>
        <div className="row text-center" data-aos="zoom-in">
          <div className="col p-5 mb-sm-5 me-md-1 bg-white mb-3">
            <IoBusinessOutline style={{fontSize: "60px"}}/>
            <h2>Client-Focused</h2>
            <p>
              Every business is unique and so we deliver you with tailored
              solutions. We don't just give business advisory, we walk the
              walk with you.
            </p>
          </div>
          <div className="col p-5 mb-sm-5 bg-white mb-3">
            <VscBook style={{fontSize: "60px"}}/>
            <h2>Value-Oriented</h2>
            <p>
              We offer free educational resources that help entrepreneurs
              launch, grow and lead successful businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
