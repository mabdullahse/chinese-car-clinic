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
                        href="mailto:chinesecenter786@gmail.com
"
                      >
                        chinesecenter786@gmail.com
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
                allowFullScreen // ✅ Correct way to use a boolean attribute
                aria-hidden="false"
                tabIndex={0} // ✅ In JSX, use camelCase for `tabIndex`
              ></iframe>
            </div>
            <div className="col-md-6">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1440806965947!2d40.4407637!3d21.2578417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e98f72f815789b%3A0x4b5624dc906809cc!2zSGVueWRhaSBraWEgTUcg2YXYt9i52YUg2KfZhNis2KfZgSDYrNin2YjYp9mG2YrYqg!5e0!3m2!1sen!2ssa!4v1712467890123"
                frameBorder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactFrom;
