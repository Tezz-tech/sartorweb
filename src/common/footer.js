import logo from "../assets/icons/logo-white.svg"
import twitter from "../assets/icons/twitter.svg"
import facebook from "../assets/images/facebook-icon.svg"
import Be from "../assets/icons/Be.svg"
import website from "../assets/icons/website.svg"
import { Link } from "react-router-dom"
import "../styles/footer.css"
import secureIcon from "../assets/icons/secure-icon.svg"
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="container">
                <div className="row  mb-5">
                    <div className="col-lg-7">
                        <div className="d-flex align-items-center justify-content-start  footer-logo mb-3">
                            <figure className="mr-2">
                                <img src={logo} alt="" />
                            </figure>
                            <h2>5amas</h2>
                        </div>
                        <p className="footer-writeup">At 5amas, we redefine online shopping by fostering trust between businesses and customers. Our platform offers secure escrow services that ensure a seamless and trustworthy transaction experience. Whether you're a small business or a large enterprise, join us to enhance your online presence and build lasting customer relationships.</p>

                        <div className="d-flex align-items-center justify-content-start footer-social-media">
                            <figure className="mr-3">
                                <img src={twitter} alt="" />
                            </figure>
                            <figure className="mr-3">
                                <img src={facebook} alt="" />
                            </figure>
                            <figure className="mr-3">
                                <img src={Be} alt="" />
                            </figure>
                            <figure className="mr-3">
                                <img src={website} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <ul className="footer-liat">
                        <li><Link className="link-tag">Home</Link></li>
                        <li><Link className="link-tag">Explore</Link></li>
                        <li><Link className="link-tag">Help</Link></li>
                        <li><Link className="link-tag">Open your store</Link></li>
                        <li><Link className="link-tag">About Use</Link></li>
                        <li><Link className="link-tag">Term & condition</Link></li>
                        <li><Link className="link-tag">Privacy</Link></li>
                        
                        </ul>
                    </div>
                </div>

                <hr className="mb-5"/>

                <div className="footer-copyRight ">
                    <p>5amas © Copyrigt 2023</p>

                    <div className="d-flex align-items-center footer-copyRight-secure ">
                    <figure className="mr-3">
                        <img src={secureIcon} alt="" />
                    </figure>
                    <p>Secure payments via Lemon Squeezy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}