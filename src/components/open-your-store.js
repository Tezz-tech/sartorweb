import store from "../assets/images/open-store.svg"
import "../styles/open-your-store.css"
export default function OpenYourStore(){
    return(
        <div className="">
            <div className="open-your-store">
                <div className="d-flex align-items-center justify-content-end w-50">
                    <figure className="open-your-store-figure">
                        <img src={store} alt="" />
                    </figure>
                </div>
                <div className="open-store-details">
                    <h2>Open your store with us </h2>
                    <h6>Get engagements on our platform seamleslessly through our technology</h6>
                    <button>Open your store </button>
                </div>
            </div>
        </div>
    )
}