import store from "../assets/images/open-store.svg";
import "../styles/open-your-store.css";

export default function OpenYourStore() {
  return (
    <div className="container">
      <div className="open-your-store d-flex align-items-center justify-content-center">
        <div className="col-lg-6 d-flex align-items-center justify-content-center open-store-details">
          <div className="open-store-details">
            <h2 className="text-center">Book A Business Consultation With Us</h2>
            <h6 className="mt-4 mb-4 text-center">Are You Ready To Scale Your Business?</h6>
            <div className="d-flex align-items-center justify-content-center">
              <button>Book A Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
