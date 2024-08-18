import 'bootstrap/dist/css/bootstrap.min.css';
const LatestArticles = () => {
  return (
    <div className="container-fluid bg-body-tertiary  sartor-pad2">
      <div className="container p-5">
        <div className="text-center pb-3" data-aos="zoom-in">
          <h4 className="fs-5">INSIGHTS</h4>
          <h2 className="fs-1 mb-3">Latest Articles</h2>
          <p>
            Get informative and enlightening articles to help you grow your
            business today
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* <div className="col">
            <div className="card border-0 shadow" data-aos="fade-down-right">
              <img
                src="https://images.pexels.com/photos/4491918/pexels-photo-4491918.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="card-img-top sartor-height"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  How to Start a Business in Nigeria: A Step-by-Step
                  Guide-PART 1
                </h5>
                <p className="small">November 1, 2022</p>
                <p className="card-text">
                  Do you want to start a business in Nigeria? Discover where to
                  start and how to achieve success.
                </p>
                <a
                  href=""
                  className="link text-decoration-none fw-medium sartor-txt-green"
                >
                  Read More »
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow" data-aos="fade-down-left">
              <img
                src="https://images.pexels.com/photos/4238488/pexels-photo-4238488.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  How to Start a Business in Nigeria: A Step-by-Step
                  Guide-PART 2
                </h5>
                <p className="small">November 28, 2022</p>
                <p className="card-text">
                  This part deals with choosing a suitable banking partner,
                  raising capital, accounting or bookkeeping.
                </p>
                <a
                  href=""
                  className="link text-decoration-none fw-medium sartor-txt-green"
                >
                  Read More »
                </a>
              </div>
            </div>
          </div> */}
          <h1 className='mt-5 mb-5 text-center'>No Avaliable Blogs</h1>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
