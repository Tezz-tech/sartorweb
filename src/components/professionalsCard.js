import React from 'react';
import star from '../assets/icons/star-rate.svg';
import '../styles/professionals.css';
import { IoLogoLinkedin } from "react-icons/io5";

export default function Professionals({ data, handleClick, btnTitle, next }) {
  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-lg-3 mb-5 professional-card" data-aos="zoom-in" key={item.name}>
          <figure>
            <img src={item.img} alt="" />
          </figure>
          <h5>{item.name}</h5>
          <h6>{item.title}</h6>
          <div className="rate d-flex align-items-center justify-content-start">
           
              <IoLogoLinkedin style={{fontSize: "20px"}}/>
            <h6>{item.rate}</h6>
          </div>
        </div>
      ))}

      {/* Conditionally render the button based on the presence of handleClick */}
      {handleClick && (
        <div className="professional-card-btn mt-5 mb-5">
          <button onClick={handleClick}>
            {btnTitle}
            <img src={next} alt="" className="ml-3" />
          </button>
        </div>
      )}
    </div>
  );
}
