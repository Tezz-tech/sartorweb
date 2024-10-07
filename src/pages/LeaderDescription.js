import React from 'react';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { SlTrophy } from 'react-icons/sl';
import { MdCheckCircle, MdAttachMoney } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import Navigation from '../common/navigation';

const LeaderDescription = () => {
  return (
   <>
   <div className="container mt-5">
      <Card className="shadow-lg border-0">
        <Card.Body>
          <Row className="mb-4 mt-5">
            <Col md={6}>
              <Image src="https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/Communicate_Leader_Blog_Header_1500x750-606x303.jpg.optimal.jpg" fluid rounded />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <Card.Title>
                  <SlTrophy style={{ fontSize: '40px', color: '#182659' }} /> Become a Leader - Full Course
                </Card.Title>
                <Card.Text>
                  Unlock your leadership potential with our comprehensive leadership development program. This course is designed to provide personalized guidance, industry-specific focus, and strategic insights to help you become a respected leader in your field.
                </Card.Text>
                <h4><MdAttachMoney /> Course Fee: ₦3000</h4>
                <Button variant="primary" size="lg" className="mt-3" disabled>
                Proceed to Sartor E-Learn
                </Button>
              </div>
            </Col>
          </Row>

          <hr />

          <Row className="mb-4">
            <Col md={4}>
              <h5><FaRegLightbulb style={{ color: '#f7b731' }} /> Leadership Development</h5>
              <p>Enhance your leadership skills through targeted development programs.</p>
            </Col>
            <Col md={4}>
              <h5><MdCheckCircle style={{ color: '#26de81' }} /> Industry-Specific Focus</h5>
              <p>Receive guidance tailored to your industry’s unique challenges and opportunities.</p>
            </Col>
            <Col md={4}>
              <h5><SlTrophy style={{ color: '#fd9644' }} /> Strategic Leadership</h5>
              <p>Develop the strategic thinking needed to lead your organization to success.</p>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
            <h5 style={{ fontSize: '30px' }}>Benefits</h5>
            <ul  style={{ fontSize: '18px' }}>
                <li>Tailored leadership programs for every level of experience.</li>
                <li>Industry-specific insights to help you stay ahead of the competition.</li>
                <li>Join a network of successful leaders and professionals.</li>
              </ul>
            </Col>
          </Row>
         

          <hr />

          <Row className="mb-4">
            <Col md={2} className="text-center">
              <Image style={{height: "70px", width:"70px"}} src="https://png.pngitem.com/pimgs/s/236-2363986_male-teacher-2-clip-art-user-icon-hd.png" roundedCircle />
            </Col>
            <Col md={10}>
              <blockquote className="blockquote">
                <p className="mb-2">"The leadership skills I gained from this course were transformative. It’s a must for any aspiring leader."</p>
                <footer className="blockquote-footer">Jane Dode, <cite title="Source Title">Corporate Executive</cite></footer>
              </blockquote>
            </Col>
          </Row>

        </Card.Body>
      </Card>
    </div>
   </>
  );
};

export default LeaderDescription;
