import store from "../assets/images/open-store.svg"
import "../styles/open-your-store.css"
export default function OpenYourStore(){
    return(
        <div className=" container">
            <div className="open-your-store row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <figure className="open-your-store-figure">
                        <img src={store} alt="" />
                    </figure>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center open-store-details">
                    <div className=" open-store-details ">
                        <h2  className="text-center">Open your store with us </h2>
                        <h6  className="mt-4 mb-4 text-center">Get engagements on our platform seamleslessly through our technology</h6>
                        <div className="d-flex align-items-center justify-content-center">
                            <button>Open your store </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}