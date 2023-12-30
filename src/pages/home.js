import Explore from "../components/explore";
import Navigation from "../common/navigation";
import HomeBanner from "../components/homeBanner";
import CategoryCard from "../components/categoryCard";
import Professionals from "../components/professionalsCard";
import BestSellerCard from "../components/best-seller-card";

export default function Home(){
    return(
        <div>
            <Navigation/>
            <div className="mb-5">
              <HomeBanner/>
            </div>
            <div className="container mt-5">
                <Explore title="Explore Top Categories" handleClick btnTitle="VIEW ALL CATEGORY "/>
                <CategoryCard/>
            </div>
            <div className="container mt-5 mb-5">
                <Explore title="Explore Top Professionals" handleClick btnTitle="VIEW ALL PROFESSIONALS"/>
                <Professionals/>
            </div>

            <div className="container mt-5 mb-5">
                <Explore title="Explore Best Seller Items" handleClick btnTitle="VIEW ALL PRODUCTS"/>
                <BestSellerCard/>
            </div>
        </div>
    )
}