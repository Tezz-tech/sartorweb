import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star  from "../assets/icons/review-start.svg"
import "../styles/slick.css"


export default function Slick({ data, handleClick, btnTitle, next , leftToRight }){
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: leftToRight,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const inneSsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    // rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
    
    return(
        <div>
                 <Slider {...settings}>
                 {data.map((item) => (
        <div className="col-lg-3 mb-5 " key={item.name}>
          <figure >
            <img src={item.img} alt="" />
          </figure>
          <h5 className="">{item.name}</h5>
          <h6>{item.title}</h6>
          <div className="rate d-flex align-items-center justify-content-start">
            <figure>
              <img src={star} alt="" />
            </figure>
            <h6>{item.rate}</h6>
          </div>
        </div>
      ))}
        </Slider>
        </div>
    )
}