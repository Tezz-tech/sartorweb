import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutComp = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7 col-sm-12" style={{ height: '700px', overflow: 'hidden' }}>
          <img
            src="https://images.pexels.com/photos/9480118/pexels-photo-9480118.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Left Section"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-5 col-sm-12 d-flex align-items-center justify-content-center" data-aos="zoom-in" style={{ height: '700px' }}>
          <div className="text-container" style={{ marginTop: "75px", marginBottom: "30px"}}>
            <h1 style={{fontSize: "40px"}}>We're A Premium Management Consulting Firm</h1>
            <p style={{fontSize: "20px"}}>Sartor Limited is a premier management consulting and technology firm founded in Nigeria in 2020. Committed to nurturing and guiding entrepreneurs and managers of Small and Medium Enterprises (SMEs), we specialize in delivering comprehensive solutions to foster the growth and success of startups. Our focus lies in the key sectors of healthcare/pharmaceutical, agriculture, and fast-moving consumer goods (FMCG) manufacturing, processing, and distribution, which are pivotal drivers of the African economy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
