import "../styles/join-our-community.css"

export default function JoinOurCommnuity(){
    return(
        <div className=" join-our-community" >
            <div className="update-release">
                <h6 className="text-center">UPDATES & RELEASES</h6>
                <h2 className="text-center">Join Our Community</h2>
                <h6 className="text-center">Join our newsletter list for occasional updates, products and insights.</h6>
            </div>
            <div className="d-flex justify-content-center ">
                <form action="" className="join-our-community-form container">
                    <input type="text" placeholder="name@email.com"/>
                    <button data-aos="zoom-in"> Subscribe</button>
                </form>
            </div>
        </div>
    )
}