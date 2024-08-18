import sam from  "../assets/images/tim-smith.svg"
import mylah from  "../assets/images/mylah-nylah.svg"
import carley from  "../assets/images/carley-jones.svg"
import star from  "../assets/images/star.svg"
import "../styles/what-users-say.css"



export default function WhatUserSay(){



  const data = [
    {
      img: sam,
      review: "The team was very responsive and communicative throughout the entire consulting process.",
      name: "Sam Smith",
      comp: "CEO @ Compan"
    },
    {
        img: mylah,
        review: "Established a strong rapport with clients, making collaboration seamless.",
        name: "Mylah Nylah",
        comp: "CEO @ Midori"
      },
      {
        img: carley,
        review: "Demonstrated innovative solutions that positively impacted our business.",
        name: "Carley Jones",
        comp: "CEO @ Aigen"
      },
  ];

    return(
        <div className="">
            <div>
                <h2 className="text-center see-whats-new">See What Our Clients Are Saying</h2>
                <div className="row mt-5">
                    {
                        data.map((data)=>(
                            <div className="col-lg-4 what-users-say"> 
                                <h4  className="text-center w-75 m-auto">
                                    "{data.review}"
                                </h4>
                                <figure className="mt-3 mb-3">
                                    <img src={data.img} alt="" />
                                </figure>
                                <h6>{data.name}</h6>
                                <h6 className="what-user-sau-comp">{data.comp}</h6>
                                <div className="mt-3">
                                    <figure>
                                        <img src={star} alt="" />
                                    </figure>
                                </div>
                            </div>

                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}