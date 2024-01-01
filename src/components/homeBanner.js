import homeBanner from "../assets/images/home-banner.svg"
import "../styles/home.css"
export default function HomeBanner(){
    return (
        <div className="container">

            <div className=" row">
                <div className=" col-lg-6 d-flex align-items-center justify-content-center home-banner-left">
                    <div>
                      <h3 className="">Secure Your Online Shopping Experience with 5amas</h3>
                        <p>Trustworthy Escrow Services Connecting Businesses and Customers</p>
                        <button>Explore Business </button>
                    </div>
                </div>
                <div className="col-lg-6 home-banner-right">
                    <figure>
                         <img src={homeBanner} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}