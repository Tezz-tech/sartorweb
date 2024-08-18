import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConsultingComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 align-items-center justify-content-center">
          <div className="box">
           <h1>Business Start-Up Consulting:</h1>
           <h3>Guiding you from ideation to implementation</h3>
           <h3>Streamlined business registration and legal compliance assistance</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            {/* Content for the second box */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultingComponent;
