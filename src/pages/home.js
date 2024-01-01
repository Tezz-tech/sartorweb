import Explore from "../components/explore";
import Navigation from "../common/navigation";
import HomeBanner from "../components/homeBanner";
import CategoryCard from "../components/categoryCard";
import Professionals from "../components/professionalsCard";
import BestSellerCard from "../components/best-seller-card";
import WhatUserSay from "../components/what-users-say";
import OpenYourStore from "../components/open-your-store";
import JoinOurCommnuity from "../components/join-our-community";
import Footer from "../common/footer";
import { useNavigate } from "react-router-dom";
import micheal from "../assets/images/micheal.svg"
import gift from "../assets/images/gift.svg";
import daniella from "../assets/images/daniella.svg";

import flash from "../assets/images/flash-drive.svg"
import razor from "../assets/images/electric-razor.svg";
import washing from "../assets/images/washing-machine.svg";
import power from "../assets/images/power-station.svg";

export default function Home(){

    const navigate = useNavigate()

    const newData = [
        {
          img: flash,
          name: "Flash Drive",
          price: "₦ 4,999"
        },
        {
            img: razor,
            name: "Flash Drive",
            price: "₦ 4,999"
        },
        {
            img: washing,
            name: "Flash Drive",
            price: "₦ 4,999"
        },
        {
            img: power,
            name: "Flash Drive",
            price: "₦ 4,999"
        },
        {
            img: flash,
            name: "Flash Drive",
            price: "₦ 4,999"
          },
          {
              img: razor,
              name: "Flash Drive",
              price: "₦ 4,999"
          },
          {
              img: washing,
              name: "Flash Drive",
              price: "₦ 4,999"
          },
          {
              img: power,
              name: "Flash Drive",
              price: "₦ 4,999"
          },
      ];
    


      const data = [
    {
      img: micheal,
      name: "Micheal Phillip",
      title: "mechanic",
      rate: "4.5"
    },
    {
      img: gift,
      name: "Gift Essien",
      title: "Makeup artist"
    },
    {
        img: micheal,
        name: "Micheal Phillip",
        title: "mechanic"
    },
    {
      img: daniella,
      name: "Daniella Jones",
      title: "Event Planner"
    },
  ];
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
                <Explore title="Explore Top Professionals" handleClick={()=>navigate("/top-professtionals")} btnTitle="VIEW ALL PROFESSIONALS"/>
                <Professionals data={data}/>
            </div>

            <div className="container mt-5 mb-5">
                <Explore title="Explore Best Seller Items" handleClick={()=>navigate("/best-seller")} btnTitle="VIEW ALL PRODUCTS"/>
                <BestSellerCard data={newData}/>
            </div>
            <div className="container see-what-our-users-say">
                <WhatUserSay/>
            </div>
            <div className="container mt-5">
                <OpenYourStore/>
            </div>
            <div className="">
              <JoinOurCommnuity/>
            </div>

            <div className="">
              <Footer />
            </div>
        </div>
    )
}