import micheal from "../assets/images/micheal.svg"
import "../styles/professionals.css"
import gift from "../assets/images/gift.svg";
import daniella from "../assets/images/daniella.svg";

export default function Professionals(){

    
  const data = [
    {
      img: micheal,
      name: "Micheal Phillip",
      title: "mechanic"
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
        <div className="row">
            {
                data.map((data)=>(
            <div className="col-lg-3 professional-card">
                <figure>
                    <img src={data.img} alt="" />
                </figure>
                <h5>{data.name}</h5>
                <h6>{data.title}</h6>
            </div>
                ))
            }
            {/* <div className="col-3 professional-card">
                <figure>
                    <img src={micheal} alt="" />
                </figure>
                <h5>Micheal Phillip</h5>
                <h6>Mechanic</h6>
            </div>
            <div className="col-3 professional-card">
                <figure>
                    <img src={micheal} alt="" />
                </figure>
                <h5>Micheal Phillip</h5>
                <h6>Mechanic</h6>
            </div>
            <div className="col-3 professional-card">
                <figure>
                    <img src={micheal} alt="" />
                </figure>
                <h5>Micheal Phillip</h5>
                <h6>Mechanic</h6>
            </div> */}
        </div>
    )
}