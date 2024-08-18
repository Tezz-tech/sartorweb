import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const AboutUsComponent = () => {
  return (
    <div className="container-fluid bg-body-tertiary p-5 mt-5">
      <Container className=" mt-4 sartor-pad2 p-sm-0">
        <h1 data-aos="zoom-in" className="fw-bold fs-1 mt-5">
        Vision
        </h1>
        <p data-aos="zoom-in" className="fs-5 mt-3">
        To be the catalyst for sustainable development in Africa by empowering entrepreneurs and SMEs through innovative management and technology solutions.
        </p>
        <h1 data-aos="zoom-in" className="fw-bold fs-1">
        Mission
        </h1>
        <p data-aos="zoom-in" className="fs-5 mt-3">
        Managing Consulting at its Finest - Sartor is dedicated to providing top-notch consulting services that enable entrepreneurs to navigate challenges, transform ideas into successful businesses, and contribute to the economic prosperity of the African continent.
        </p>
        
      </Container>
    </div>
  );
};

export default AboutUsComponent;
