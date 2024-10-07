import React from 'react';
import { Button, Card, Image, Row, Col } from 'react-bootstrap';
import { FaChartLine } from 'react-icons/fa';
import { MdCheckCircle, MdAttachMoney } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import Navigation from '../common/navigation';

const GrowBusiness = () => {
    return (
        <>
            <div className="container mt-5">
                <Card className="shadow-lg border-0">
                    <Card.Body>
                        <Row className="mb-4 mt-5">
                            <Col md={6}>
                                <Image src="https://portalcfo.com/wp-content/uploads/2019/06/growbusiness.jpg" fluid rounded />
                            </Col>
                            <Col md={6} className="d-flex align-items-center">
                                <div>
                                    <Card.Title>
                                        <FaChartLine style={{ fontSize: '40px', color: '#182659' }} /> Grow Your Business - Full Course
                                    </Card.Title>
                                    <Card.Text>
                                        Take your business to the next level with our comprehensive growth strategies. This course includes in-depth guidance on strategic planning, market research, and sales & marketing strategies to help you expand your business successfully.
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
                                <h5><FaRegLightbulb style={{ color: '#f7b731' }} /> Strategic Planning</h5>
                                <p>Develop innovative strategies that align with your business goals and ensure long-term growth.</p>
                            </Col>
                            <Col md={4}>
                                <h5><MdCheckCircle style={{ color: '#26de81' }} /> Market Research & Analysis</h5>
                                <p>Gain insights into your market and competitors to make informed decisions that drive success.</p>
                            </Col>
                            <Col md={4}>
                                <h5><FaChartLine style={{ color: '#fd9644' }} /> Sales & Marketing Strategy</h5>
                                <p>Create effective sales and marketing plans that increase revenue and customer loyalty.</p>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col>
                            <h5 style={{ fontSize: '30px' }}>Benefits</h5>
                            <ul  style={{ fontSize: '18px' }}>
                                    <li>Proven strategies that have helped businesses grow rapidly.</li>
                                    <li>In-depth market research tools and techniques.</li>
                                    <li>Supportive community of business owners and entrepreneurs.</li>
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
                                    <p className="mb-0">"The strategies from this course helped us triple our revenue in just six months!"</p>
                                    <footer className="blockquote-footer mt-1">Alex Smith</footer>
                                </blockquote>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default GrowBusiness;
