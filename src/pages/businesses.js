import Navigation from "../common/navigation";
import "../styles/businesses.css"
import busineesLogo from "../assets/images/business-logo.svg"
import trustBadge from "../assets/icons/trust-badge.svg"
import star  from "../assets/icons/review-start.svg"
import reviewer from "../assets/images/reviewer-img.svg"



import micheal from "../assets/images/Esther-howard.svg"
import gift from "../assets/images/Jacob-jones.svg";
import daniella from "../assets/images/Cody-fisher.svg";
import Kathryn from "../assets/images/Kathryn-murphy.svg";
import jane from "../assets/icons/Jane-Cooper.svg";
import guy from "../assets/icons/guy-hawkins.svg";
import ralph from "../assets/icons/ralph-edward.svg";
import Albert from "../assets/icons/Albert-flores.svg";


import flash from "../assets/images/flash-drive.svg"
import razor from "../assets/images/electric-razor.svg";
import washing from "../assets/images/washing-machine.svg";
import power from "../assets/images/power-station.svg";

import Footer from "../common/footer";
import Slick from "./slick";
import BestSellerCard from "../components/best-seller-card";
import Explore from "../components/explore";
export default function Businesses(){

    const newData = [
        {
          img: micheal,
          name: "Micheal Phillip",
          title: "mechanic",
          rate: "4.5"
        },
        {
          img: gift,
          name: "Gift Essien",
          title: "Makeup artist"
        },
        {
            img: micheal,
            name: "Micheal Phillip",
            title: "mechanic"
        },
        {
          img: daniella,
          name: "Daniella Jones",
          title: "Event Planner"
        },

        {
            img: Kathryn,
            name: "Daniella Jones",
            title: "Event Planner"
          },
    
        {
            img: jane,
            name: "Micheal Phillip",
            title: "mechanic",
            rate: "4.5"
          },
          {
            img: guy,
            name: "Gift Essien",
            title: "Makeup artist"
          },
          {
              img: ralph,
              name: "Micheal Phillip",
              title: "mechanic"
          },
          {
            img: Albert,
            name: "Daniella Jones",
            title: "Event Planner"
          },
          {
            img: micheal,
            name: "Micheal Phillip",
            title: "mechanic",
            rate: "4.5"
          },
          {
            img: gift,
            name: "Gift Essien",
            title: "Makeup artist"
          },
          {
              img: micheal,
              name: "Micheal Phillip",
              title: "mechanic"
          },
          {
            img: daniella,
            name: "Daniella Jones",
            title: "Event Planner"
          },
      ];


      const coffee = [
        {
          img: flash,
          name: "Flash Drive",
          price: "₦ 4,999"
        },
        {
            img: razor,
            name: "Flash Drive",
            price: "₦ 4,999"
        },
        {
            img: washing,
            name: "Flash Drive",
            price: "₦ 4,999"
        },
        {
            img: power,
            name: "Flash Drive",
            price: "₦ 4,999"
        },
        {
            img: flash,
            name: "Flash Drive",
            price: "₦ 4,999"
          },
          {
              img: razor,
              name: "Flash Drive",
              price: "₦ 4,999"
          },
          {
              img: washing,
              name: "Flash Drive",
              price: "₦ 4,999"
          },
          {
              img: power,
              name: "Flash Drive",
              price: "₦ 4,999"
          },
      ];

    return(
        <div>
            <Navigation/>
            <div className="mt-4 mb-5 business-pages container">
                <p>Home / Businesses / Coffee and Resto</p>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-3">
                        <div>
                            <figure className="business-logo">
                                <img src={busineesLogo} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="business-detail">
                            <h1 className="fw-bolder">Coffee and Resto</h1>
                            <h5 className="fw-bolder">Cafes and Resturants</h5>
                            <p>Coffee and Resto is a shop located in the heart of Abuja, with the aim to create connections and good tea to make you experience your day better. We hope you come shop with us</p>
                            <button>View Website</button>
                        </div>
                    </div>
                    <div className="col-lg-3 border business-right">
                        <div className="p-4">
                            <h5 className="fw-bolder">Trust Badge</h5>
                            <div className=" ">
                                <div className="d-flex align-items-center justify-content-start mb-3">
                                    <figure>
                                        <img src={trustBadge} alt="" />
                                    </figure>
                                    <div className="ml-2" >
                                        <h1 className="fs-1">100%</h1>
                                        <h6 className="fw-bolder">Recommended</h6>
                                    </div>

                                </div>
                                <h5 className="fw-bolder">Reviews</h5>
                                <div className="d-flex align-items-center justify-content-start ">
                                    <figure className="review-star"><img src={star} alt="" /></figure>
                                    <h1 className="fw-bolder">4.8</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 mb-5">
                    <div className="col-lg-9 ">
                        <div className="mb-4">
                            <div className="d-flex align-items-center justify-content-start ">
                                <h4 className="mr-2 fw-bolder">Reviews (453) </h4>
                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>
                                <h5 className="ml-2 fw-bolder">4.5</h5>
                            </div>
                        </div>
                        <div className="row  d-flex align-items-center mb-4">
                            <div className="col-lg-3 d-flex align-items-center justify-content-start ">
                                <figure className="m-0 reviewer  "><img src={reviewer} alt="" /></figure>
                                <h5 className="ml-4">Jenny Wilson</h5>
                            </div>
                            <div className="col-lg-6  ">
                                <p className="m-0">I had a swell time yesterday, it was a 10 for me </p>
                            </div>
                            <div className="col-lg-3 ">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>
                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>
                                    </div>
                            </div>

                        </div>
                        <div className="row  d-flex align-items-center mb-4">
                            <div className="col-lg-3 d-flex align-items-center justify-content-start ">
                                <figure className="m-0 reviewer  "><img src={reviewer} alt="" /></figure>
                                <h5 className="ml-4">Jenny Wilson</h5>
                            </div>
                            <div className="col-lg-6  ">
                                <p className="m-0">I had a swell time yesterday, it was a 10 for me </p>
                            </div>
                            <div className="col-lg-3 ">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>
                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>
                                    </div>
                            </div>

                        </div>

                        <div className="row  d-flex align-items-center mb-4">
                            <div className="col-lg-3 d-flex align-items-center justify-content-start ">
                                <figure className="m-0 reviewer  "><img src={reviewer} alt="" /></figure>
                                <h5 className="ml-4">Jenny Wilson</h5>
                            </div>
                            <div className="col-lg-6  ">
                                <p className="m-0">I had a swell time yesterday, it was a 10 for me </p>
                            </div>
                            <div className="col-lg-3 ">
                                    <div className="d-flex align-items-center justify-content-center">
                                    <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>
                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>

                                <figure className="reviewer ">
                                    <img src={star} alt="" />
                                </figure>
                                    </div>
                            </div>

                        </div>

                            <div className="d-flex justify-content-center mt-5 view-more-reviews mb-5">
                                   <button>View more</button>
                            </div>

                        

                        
                    </div>
                    <div className="col-lg-3 border business-right">
                        <div className="p-4">
                            <h5 className="fw-bolder">Trust Badge</h5>
                            <div className=" ">
                                <div className="d-flex align-items-center justify-content-start mb-3">
                                    <figure>
                                        <img src={trustBadge} alt="" />
                                    </figure>
                                    <div className="ml-2" >
                                        <h1 className="fs-1">100%</h1>
                                        <h6 className="fw-bolder">Recommended</h6>
                                    </div>

                                </div>
                                <h5 className="fw-bolder">Reviews</h5>
                                <div className="d-flex align-items-center justify-content-start ">
                                    <figure className="review-star"><img src={star} alt="" /></figure>
                                    <h1 className="fw-bolder">4.8</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="container">
            <Explore title="Coffee and Resto Staffs" />
            <Slick data={newData} btnTitle="Next"/>

            </div>

            <div className="container mt-5 mb-5">
                <Explore title="Coffee and Resto Products" />
                <BestSellerCard data={coffee}/>
            </div>
            <Footer/>
        </div>
    )
}