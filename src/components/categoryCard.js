import fashion from "../assets/icons/fashion.svg";
import electronics from "../assets/icons/electronics.svg";
import beauty from "../assets/icons/beauty.svg";
import kitchen from "../assets/icons/kitchen.svg";
import groceries from "../assets/icons/groceries.svg";
import repair from "../assets/icons/repair.svg";
import "../styles/categoryCard.css";
import { useState } from "react";

export default function CategoryCard() {

  const data = [
    {
      img: fashion,
      name: "Fashion and Apparel",
    },
    {
      img: electronics,
      name: "Electronics and Gadgets",
    },
    {
      img: kitchen,
      name: "Home and Kitchen Appliances",
    },
    {
      img: beauty,
      name: "Beauty and Personal Care",
    },
    {
      img: groceries,
      name: "Groceries and Food Delivery",
    },
    {
      img: repair,
      name: "Repair Services",
    },
  ];

  return (
    <div className="row p-2 category-card-image-container ">
      {data.map((item, index) => (
        <div className=" col-lg-2 mb-3 p-2" key={index}>
            <div className="category-card-image">
                <figure className="">
                    <img src={item.img} alt="" />
                </figure>
                <h4>{item.name}</h4>
            </div>
        </div>
      ))}
    </div>
  );
}
