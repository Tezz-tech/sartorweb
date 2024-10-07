import React from 'react';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { MdOutlineBusiness, MdCheckCircle, MdAttachMoney } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import Navigation from '../common/navigation';

const StartBusiness = () => {
    return (
        <>
            <div className="container mt-5">
                <Card className="shadow-lg border-0">
                    <Card.Body>
                        <Row className="mb-4 mt-5">
                            <Col md={6}>
                                <Image src="https://financesonline.com/uploads/2019/08/how-to-start-a-business-featured-web-final.jpg" fluid rounded />
                            </Col>
                            <Col md={6} className="d-flex align-items-center">
                                <div>
                                    <Card.Title>
                                        <MdOutlineBusiness style={{ fontSize: '40px', color: '#182659' }} /> Start a Business - Full Course
                                    </Card.Title>
                                    <Card.Text>
                                        This comprehensive course covers everything you need to start your own business successfully.
                                        From idea generation and market research to business planning and registration, we've got you covered!
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
                                <h5><FaRegLightbulb style={{ color: '#f7b731' }} /> Idea Generation</h5>
                                <p>Learn how to brainstorm and refine business ideas that align with your passion and market needs.</p>
                            </Col>
                            <Col md={4}>
                                <h5><MdCheckCircle style={{ color: '#26de81' }} /> Business Planning</h5>
                                <p>Step-by-step guidance on creating a solid business plan that attracts investors and sets you up for success.</p>
                            </Col>
                            <Col md={4}>
                                <h5><MdOutlineBusiness style={{ color: '#fd9644' }} /> Registration & Launch</h5>
                                <p>Understand the legal requirements and processes for registering your business and getting it off the ground.</p>
                            </Col>
                        </Row>

                        <hr />

                       
                        <Row>
                            <Col>
                            <h5 style={{ fontSize: '30px' }}>Benefits</h5>
                            <ul  style={{ fontSize: '18px' }}>
                                    <li>Experienced instructors with real-world business knowledge.</li>
                                    <li>Practical, hands-on exercises and assignments.</li>
                                    <li>Access to a supportive community of fellow entrepreneurs.</li>
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
                                    <p className="mb-0">"This course gave me the confidence and tools I needed to start my business. The step-by-step approach was incredibly helpful!"</p>
                                    <footer className="blockquote-footer">Jane Doe</footer>
                                </blockquote>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default StartBusiness;
