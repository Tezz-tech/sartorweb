// import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../assets/icons/5amas-logo.svg";
import search from "../assets/icons/search-icon.svg"
import "../styles/navigation.css"
// export default function Navigation() {
//   const navigate = useNavigate()
//   const signin = useNavigate()
//   // const SignUp = useNavigate()

//   return (
//     <div className="navigation-container">
//       <div className="container d-flex align-items-center justify-content-between">
//         <div className="nav-logo" onClick={()=>navigate("/")}>
//           <figure >
//             <img src={logo} alt="" /> 
//           </figure>
//         </div>
//         <div className="navigation-left">
//           <div className="navigation-links">
//             <Link className="nav-links">Home</Link>
//             <Link className="nav-links">Explore</Link>
//             <Link className="nav-links">Help</Link>
//             <Link className="nav-links">Open your store</Link>
//           </div>
//           <div className="navigation-cart-and-sign">
//             <div className="nav-cart-btn">
//               <button >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="25"
//                   height="25"
//                   viewBox="0 0 25 25"
//                   fill="none"
//                   className="mr-3"
//                 >
//                   <path
//                     d="M11.1077 20.297C11.1077 20.5797 11.0238 20.856 10.8668 21.0911C10.7097 21.3262 10.4865 21.5094 10.2253 21.6176C9.9641 21.7258 9.67669 21.7541 9.39941 21.6989C9.12214 21.6438 8.86744 21.5076 8.66753 21.3077C8.46763 21.1078 8.33149 20.8531 8.27634 20.5758C8.22118 20.2986 8.24949 20.0111 8.35768 19.75C8.46587 19.4888 8.64908 19.2655 8.88414 19.1085C9.11921 18.9514 9.39557 18.8676 9.67828 18.8676C10.0574 18.8676 10.421 19.0182 10.689 19.2862C10.9571 19.5543 11.1077 19.9179 11.1077 20.297ZM18.9694 18.8676C18.6867 18.8676 18.4103 18.9514 18.1753 19.1085C17.9402 19.2655 17.757 19.4888 17.6488 19.75C17.5406 20.0111 17.5123 20.2986 17.5675 20.5758C17.6226 20.8531 17.7588 21.1078 17.9587 21.3077C18.1586 21.5076 18.4133 21.6438 18.6905 21.6989C18.9678 21.7541 19.2552 21.7258 19.5164 21.6176C19.7776 21.5094 20.0009 21.3262 20.1579 21.0911C20.315 20.856 20.3988 20.5797 20.3988 20.297C20.3988 19.9179 20.2482 19.5543 19.9802 19.2862C19.7121 19.0182 19.3485 18.8676 18.9694 18.8676ZM23.2264 7.64226L20.6775 15.9248C20.544 16.3638 20.2726 16.7482 19.9034 17.0208C19.5343 17.2934 19.087 17.4398 18.6281 17.4382H10.0419C9.57641 17.4364 9.12402 17.2839 8.75248 17.0035C8.38093 16.7231 8.11021 16.3299 7.98086 15.8828L4.74861 4.57351H3.24595C3.0564 4.57351 2.87461 4.49821 2.74058 4.36418C2.60655 4.23014 2.53125 4.04836 2.53125 3.85881C2.53125 3.66926 2.60655 3.48747 2.74058 3.35344C2.87461 3.2194 3.0564 3.1441 3.24595 3.1441H4.74861C5.05898 3.14513 5.36067 3.24665 5.60852 3.43347C5.85637 3.62028 6.03705 3.88234 6.12352 4.18042L6.84805 6.71762H22.5429C22.6548 6.71758 22.7651 6.74378 22.8649 6.79413C22.9648 6.84448 23.0515 6.91757 23.1179 7.00751C23.1844 7.09745 23.2289 7.20174 23.2477 7.31198C23.2665 7.42223 23.2592 7.53535 23.2264 7.64226ZM21.5754 8.14702H7.25633L9.35487 15.4906C9.39757 15.6399 9.48771 15.7712 9.61166 15.8647C9.73561 15.9581 9.88663 16.0087 10.0419 16.0088H18.6281C18.7811 16.0088 18.93 15.9598 19.053 15.869C19.176 15.7781 19.2667 15.6502 19.3116 15.504L21.5754 8.14702Z"
//                     fill="#101010"
//                   />
//                 </svg>{" "}
//                 Cart
//               </button>

//             </div>

//             <div className="nav-search">
//                 <figure className="mr-2">
//                     <img src={search} alt="" />
//                 </figure>
//                 <input type="text" placeholder="Search" />
//             </div>

//             <div className="nav-log-and-sign">
//                 <button onClick={()=>signin("/auth/login")}>Login</button>
//                 <button onClick={()=>navigate("/auth/register")}>Sign up</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation

const Navigation = () => {
  const navigate = useNavigate()
    const signin = useNavigate()
    const SignUp = useNavigate()
  return (
    // <div className="navigation-container">
        <div className="navigation-container" >
          
        <Navbar collapseOnSelect expand="lg" bg="dark" className="container" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="mr-auto  w-100 d-flex align-items-center justify-content-around">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link as={Link} to="/help">Help</Nav.Link>
              <Nav.Link as={Link} to="/open-store">Open your store</Nav.Link>
            </Nav>
            <Nav className="ml-auto w-100 d-flex align-items-center justify-content-around">
              <div className="d-flex align-items-center justify-content-between cart-and-search" style={{borderLeft: "2px solid", borderRight: "2px solid"}}>

              <Nav.Link as={Link} to="/cart">
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="mr-3"
                    >
                      <path
                        d="M11.1077 20.297C11.1077 20.5797 11.0238 20.856 10.8668 21.0911C10.7097 21.3262 10.4865 21.5094 10.2253 21.6176C9.9641 21.7258 9.67669 21.7541 9.39941 21.6989C9.12214 21.6438 8.86744 21.5076 8.66753 21.3077C8.46763 21.1078 8.33149 20.8531 8.27634 20.5758C8.22118 20.2986 8.24949 20.0111 8.35768 19.75C8.46587 19.4888 8.64908 19.2655 8.88414 19.1085C9.11921 18.9514 9.39557 18.8676 9.67828 18.8676C10.0574 18.8676 10.421 19.0182 10.689 19.2862C10.9571 19.5543 11.1077 19.9179 11.1077 20.297ZM18.9694 18.8676C18.6867 18.8676 18.4103 18.9514 18.1753 19.1085C17.9402 19.2655 17.757 19.4888 17.6488 19.75C17.5406 20.0111 17.5123 20.2986 17.5675 20.5758C17.6226 20.8531 17.7588 21.1078 17.9587 21.3077C18.1586 21.5076 18.4133 21.6438 18.6905 21.6989C18.9678 21.7541 19.2552 21.7258 19.5164 21.6176C19.7776 21.5094 20.0009 21.3262 20.1579 21.0911C20.315 20.856 20.3988 20.5797 20.3988 20.297C20.3988 19.9179 20.2482 19.5543 19.9802 19.2862C19.7121 19.0182 19.3485 18.8676 18.9694 18.8676ZM23.2264 7.64226L20.6775 15.9248C20.544 16.3638 20.2726 16.7482 19.9034 17.0208C19.5343 17.2934 19.087 17.4398 18.6281 17.4382H10.0419C9.57641 17.4364 9.12402 17.2839 8.75248 17.0035C8.38093 16.7231 8.11021 16.3299 7.98086 15.8828L4.74861 4.57351H3.24595C3.0564 4.57351 2.87461 4.49821 2.74058 4.36418C2.60655 4.23014 2.53125 4.04836 2.53125 3.85881C2.53125 3.66926 2.60655 3.48747 2.74058 3.35344C2.87461 3.2194 3.0564 3.1441 3.24595 3.1441H4.74861C5.05898 3.14513 5.36067 3.24665 5.60852 3.43347C5.85637 3.62028 6.03705 3.88234 6.12352 4.18042L6.84805 6.71762H22.5429C22.6548 6.71758 22.7651 6.74378 22.8649 6.79413C22.9648 6.84448 23.0515 6.91757 23.1179 7.00751C23.1844 7.09745 23.2289 7.20174 23.2477 7.31198C23.2665 7.42223 23.2592 7.53535 23.2264 7.64226ZM21.5754 8.14702H7.25633L9.35487 15.4906C9.39757 15.6399 9.48771 15.7712 9.61166 15.8647C9.73561 15.9581 9.88663 16.0087 10.0419 16.0088H18.6281C18.7811 16.0088 18.93 15.9598 19.053 15.869C19.176 15.7781 19.2667 15.6502 19.3116 15.504L21.5754 8.14702Z"
                        fill="#101010"
                      />
                    </svg>
                Cart
              </Nav.Link>
              <div id="collasible-nav-dropdown" className="nav-search">
              <img src={search} alt="Search" />
                <form >
                  <input type="text" placeholder="Search" className="mr-sm-2" />
                  {/* <Button variant="outline-info">Search</Button> */}
                </form>
              </div>
              </div>

              <div > 
                <Button variant="outline-light" className="login" onClick={() => signin("/auth/login")}>Login</Button>
                <Button variant="outline-light" className=" ml-4 signupbtn" onClick={() => navigate("/auth/register")}>Sign up</Button>

              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
    // {/* </div> */}

  );
};

export default Navigation;
