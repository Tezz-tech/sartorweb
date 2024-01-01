import img from "../assets/images/sign-up.svg"
import Footer from "../common/footer"
import Navigation from "../common/navigation"
import google from "../assets/icons/Google-icon.svg"
import apple from "../assets/images/apple.svg"
import facebook from "../assets/icons/facebook.svg"
import { IoIosEye } from "react-icons/io";
import "../styles/sign-up.css"
import { useNavigate } from "react-router-dom"

export default function SignIn(){
    const navigate = useNavigate()
    return(
        <div className="">
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  ">
                        <div className="sign-in-left">
                            <figure>
                                <img src={img} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 sign-in-right">
                        <div className="w-75">
                            <h1 className="mb-4">Create an account</h1>
                            <p className="w-75">Once you've created an account, you can continuing shopping</p>
                            <form action="" >
                                <input type="text" className="signin-email" placeholder="Email address" />
                                <div className="d-flex align-items-center justify-content-between signin-password">
                                    <input type="text" placeholder="Enter password"/>
                                    <button>
                                        <IoIosEye/>
                                    </button>
                                </div>

                                <h6 className="text-end mb-3 mt-3">Forgot password?</h6>

                                <button className="signin-login mb-3 mt-3">Sign In</button>
                            </form>

                            <h6 className="sigin-in-continue-with mb-3">or continue with</h6>

                            <div className="signin-with-google">
                                <button style={{border:"None",backgroundColor: "transparent"}}>
                                    <figure>
                                        <img src={google} alt="" />
                                    </figure>
                                </button>
                                <button className="sign-in-apple">
                                    <figure>
                                        <img src={apple} alt="" />
                                    </figure>
                                </button>
                                <button style={{border:"None", backgroundColor: "transparent"}}>
                                    <figure>
                                        <img src={facebook} alt="" />
                                    </figure>
                                </button>
                            </div>

                            <h6 className=" mt-4">By clicking the “create account” or any of the social medial button you agree to our Terms of Service and Privacy Policy</h6>

                            <p className="mt-4">Don’t have an account?  <span className="fw-bolder" onClick={()=> navigate("/sign-in")}>Sign in </span></p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}