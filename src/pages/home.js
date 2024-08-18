import HomeBanner from "../components/homeBanner";
import OpenYourStore from "../components/open-your-store";
import JoinOurCommnuity from "../components/join-our-community";
import ServicesComponet from "../components/ServicesComponet";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home(){
    return(
        <div>
            <div className="mb-5">
              <HomeBanner/>
            </div>

            <div className="container mt-5 mb-5">
                <ServicesComponet/>
            </div>

            <div className="container mt-5 mb-5">
                <WhyChooseUs/>
            </div>

            <div className="">
              <JoinOurCommnuity/>
            </div>
        </div>
    )
}