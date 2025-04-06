function ContactFrom() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Contact Us //</h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">// Booking //</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      <a href="tel:+966507259008">+966507259008</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">// General //</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      <a href="tel:+966541189036">+966541189036</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">// Technical //</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      <a
                        href="mailto:chinesecenterforautomotiveserv@gmail.com
"
                      >
                        chinesecenterforautomotiveserv@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mb-5 text-center">Our branches</h2>

            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps?q=21.2573696,40.4426195&z=15&output=embed"
                frameBorder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div className="col-md-6">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps?q=21.258026678186095,40.44077442883545&z=15&output=embed"
                frameBorder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactFrom;
