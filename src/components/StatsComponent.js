import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBookReader } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';

const StatsComponent = () => {
    return (
      <Container className="mt-5">
        <Row className="text-center">
          <Col className="p-5 bg-white shadow m-2 mb-sm-3" data-aos="fade-right">
          <FaBookReader style={{fontSize: "100px"}} />
            <h1 className="fw-bolder mt-3">4</h1>
            <h2 className="fw-bold">Researches</h2>
          </Col>
          <Col className="p-5 bg-white shadow m-2 mb-sm-3" data-aos="zoom-in">
          <MdHomeRepairService style={{fontSize: "100px"}} />
            <h1 className="fw-bolder mt-3">6</h1>
            <h2 className="fw-bold">Services</h2>
          </Col>
          <Col className="p-5 bg-white shadow m-2 mb-sm-3" data-aos="fade-left">
          <FaUsers style={{fontSize: "100px"}} />
            <h1 className="fw-bolder mt-3">500+</h1>
            <h2 className="fw-bold">Happy Clients</h2>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default StatsComponent;
  