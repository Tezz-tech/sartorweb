import React from 'react';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { TbBrandAmazon } from 'react-icons/tb';
import { MdCheckCircle, MdAttachMoney } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import Navigation from '../common/navigation';

const BrandDescriptionPage = () => {
  return (
    <>
    <div className="container mt-5">
      <Card className="shadow-lg border-0">
        <Card.Body>
          <Row className="mb-4 mt-5">
            <Col md={6}>
              <Image src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2022/08/branding-process-scaled.jpg" fluid rounded />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <Card.Title>
                  <TbBrandAmazon style={{ fontSize: '40px', color: '#182659' }} /> Build A Brand - Full Course
                </Card.Title>
                <Card.Text>
                  Learn the art of branding from scratch. This course covers everything from conducting a brand audit to developing a powerful brand strategy. Perfect for businesses looking to build a strong identity that resonates with customers.
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
              <h5><FaRegLightbulb style={{ color: '#f7b731' }} /> Brand Audit</h5>
              <p>Analyze your current brand’s strengths and weaknesses to identify areas for improvement.</p>
            </Col>
            <Col md={4}>
              <h5><MdCheckCircle style={{ color: '#26de81' }} /> Brand Strategy</h5>
              <p>Develop a cohesive strategy that aligns with your business goals and resonates with your target audience.</p>
            </Col>
            <Col md={4}>
              <h5><TbBrandAmazon style={{ color: '#fd9644' }} /> Brand Identity</h5>
              <p>Create a strong and memorable brand identity that stands out in the marketplace.</p>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h5 style={{ fontSize: '30px' }}>Benefits</h5>
              <ul  style={{ fontSize: '18px' }}>
                <li>Expert guidance on building a brand that stands out.</li>
                <li>Hands-on exercises to develop your brand strategy.</li>
                <li>Join a community of like-minded entrepreneurs.</li>
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
                <p className="mb-0">"This course transformed my business's image. The branding strategies were spot on and easy to implement!"</p>
                <footer className="blockquote-footer">John Edwin</footer>
              </blockquote>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default BrandDescriptionPage;
