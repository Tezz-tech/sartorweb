import logo from "../assets/icons/logo.webp"
import twitter from "../assets/icons/twitter.svg"
import facebook from "../assets/images/facebook-icon.svg"
import Be from "../assets/icons/Be.svg"
import website from "../assets/icons/website.svg"
import { Link } from "react-router-dom"
import "../styles/footer.css"
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="container">
                <div className="row  mb-5">
                    <div className="col-lg-7">
                        <div className="d-flex align-items-center justify-content-start  footer-logo mb-3">
                            <figure className="mr-2">
                            <img src={logo} alt="Logo" />
                            </figure>
                        </div>
                        <p className="footer-writeup">At Sartor Limited, we take pride in being a premium management consulting and technology firm dedicated to steering entrepreneurs and SMEs towards success. Our unwavering commitment to excellence, coupled with innovative solutions, positions us as the partner of choice for those seeking to thrive in the dynamic business landscape of Africa. Together, we embark on a journey of growth, resilience, and prosperity.</p>
                        <button data-aos="zoom-in" className="book"><a href="https://calendar.app.google/A7b9Pyojjv1rj6sc7">Book a Consultation</a></button>
                        <div className="d-flex align-items-center justify-content-start footer-social-media">
                            <figure className="mr-3">
                                <img src={twitter} alt="" />
                            </figure>
                            <figure className="mr-3">
                                <img src={facebook} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <ul className="footer-liat">
                        <li><Link to="/" className="link-tag">Home</Link></li>
                        <li><Link to="/about" className="link-tag">About</Link></li>
                        <li><Link to="/services" className="link-tag">Our Services</Link></li>
                        <li><Link to="/blogs" className="link-tag">Blogs</Link></li>
                        <li><Link className="link-tag">Term & condition</Link></li>
                        <li><Link className="link-tag">Privacy</Link></li>
                        
                        </ul>
                    </div>
                </div>

                <hr className="mb-5"/>

                <div className="footer-copyRight ">
                    <p>Sartor Limited © Copyrigt 2024</p>
                    <div className="d-flex align-items-center footer-copyRight-secure ">
                    </div>
                </div>
            </div>
        </div>
    )
}