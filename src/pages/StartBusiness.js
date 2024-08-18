import ConsultingComponent from "../components/ConsultingComponent";
function StartBusiness() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-5">
                    <img src="https://elegalonline.com/wp-content/uploads/2022/10/startupbusinessplantop10tips_289969187.jpg" className="img-fluid" alt="Business" />
                </div>
                <div className="col-md-6 d-flex align-items-center mt-2 mb-2 justify-content-center">
                    <h1>Start A Business Today</h1>
                </div>
            </div>
            <ConsultingComponent/>
        </div>
    );
}


export default StartBusiness;