import Navigation from "../common/navigation";
import "../styles/businesses.css"
import busineesLogo from "../assets/images/business-logo.svg"
import trustBadge from "../assets/icons/trust-badge.svg"
import star  from "../assets/icons/review-start.svg"
import Footer from "../common/footer";
export default function Businesses(){
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

            </div>
            <Footer/>
        </div>
    )
}