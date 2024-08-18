import 'bootstrap/dist/css/bootstrap.min.css';
import sar1 from '../assets/images/sar1.webp';
import sar2 from '../assets/images/sar2.webp';
import sar3 from '../assets/images/sar3.webp';
import sar4 from '../assets/images/sar4.webp';
import sar5 from '../assets/images/sar5.webp';
import sar6 from '../assets/images/sar6.webp';

const WhatWeOffer = () => {
  return (
    <div className="container-fluid bg-body-tertiary sartor-pad2">
      <div className="container p-5">
        <div className="text-center pb-3" data-aos="zoom-in">
          <h2 className="fs-1 mb-3 fw-bold">Our Services</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col" data-aos="zoom-out">
            <div className="card border-0 shadow">
              <img src={sar1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-4">Startup Consulting:</h5>
                <p className="card-text fs-6">Comprehensive guidance for entrepreneurs at the inception stage.</p>
                <p className="card-text fs-6">Business registration support and legal compliance assistance.</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in">
            <div className="card border-0 shadow">
            <img src={sar2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-4">Business Plan and Market Research:</h5>
                <p className="card-text fs-6">Strategic business planning to ensure long-term viability.</p>
                <p className="card-text fs-6">In-depth market research to identify opportunities and challenges.</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-out">
            <div className="card border-0 shadow">
            <img src={sar3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-4">Brand Audit and Strategy Consulting:</h5>
                <p className="card-text fs-6">Analysis of brand identity and market positioning.</p>
                <p className="card-text fs-6">Development of effective brand strategies for enhanced market presence.</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in">
            <div className="card border-0 shadow">
            <img src={sar4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-4">Business Development Consulting:</h5>
                <p className="card-text fs-6">Tailored solutions for product and service development.</p>
                <p className="card-text fs-6">Expert advice on marketing and sales strategies.</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-out">
            <div className="card border-0 shadow">
            <img src={sar6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-4">Staff Training and Human Capital Development:</h5>
                <p className="card-text fs-6">Customized corporate training programs for skill enhancement.</p>
                <p className="card-text fs-6">Human capital development initiatives for a motivated workforce.</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in">
            <div className="card border-0 shadow">
            <img src="https://blogs.uoc.edu/elearning-innovation-center/wp-content/uploads/sites/114/2021/12/lara-far-okuvwmx7n2i-unsplash-1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-4">E-Learning Platform</h5>
                <p className="card-text fs-6">Offering free and paid education in business management sciences.</p>
                <p className="card-text fs-6">Empowering individuals with the knowledge to excel in the business landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
