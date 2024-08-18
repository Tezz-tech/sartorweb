import AboutComp from "../components/AboutComp";
import AboutUsComponent from "../components/AboutUsComponent";
import Professionals from "../components/professionalsCard";
import gift from "../assets/images/gift.svg";
import daniella from "../assets/images/daniella.svg";
import Explore from "../components/explore";
import ceo from "../assets/images/ceo.jpeg";
import ebube from "../assets/images/ebube.jpeg";
import precious from "../assets/images/precious1.jpeg";
import young from "../assets/images/young.jpeg";
import micheal from "../assets/images/peter.jpeg";
import stella from "../assets/images/stella.jpeg";
function About () {
    const data = [
        {
          img: ceo,
          name: "Nwachukwu Confidence",
          title: "Managing Director",
        },
        {
          img: young,
          name: "Young Batimehin",
          title: "Lead Developer"
        },
        {
            img: micheal,
            name: "Peter Michael",
            title: "UI/UX Designer"
        },
        {
          img: ebube,
          name: "Ebube Chinda",
          title: "Software Engineer "
        },
      ];
    const data2 = [
        {
          img: stella,
          name: "Stella Ogaziechi",
          title: "UI/UX Designer",
        },
        {
          img: precious,
          name: "Osadinizu Precious",
          title: "Front-end Developer"
        },
      ];
    return(
        <>
         <AboutComp/>
         <AboutUsComponent/>
         <div className="container mt-5 mb-5">
                <Explore title="Our Professionals"/>
                <Professionals data={data}/>
                <Professionals data={data2}/>
            </div>
        </>
    )
}
export default About;