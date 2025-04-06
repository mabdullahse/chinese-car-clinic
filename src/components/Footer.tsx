function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>{" "}
                <a
                  href="https://www.google.com/maps/place/21%C2%B015'26.2%22N+40%C2%B026'33.4%22E/@21.2573696,40.4426195,103m/data=!3m1!1e3!4m4!3m3!8m2!3d21.2572737!4d40.4426174?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  الطائف ' الصناعية ' شارع المعارض ' مقابل صرافه الأهلي
                </a>
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>{" "}
                <a href="tel:+966507259008">+966507259008</a>
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>{" "}
                <a href="tel:+966541189036">+966541189036</a>
              </p>
              <p className="mb-2">
                <a
                  href="mailto:chinesecenterforautomotiveserv@gmail.com
"
                >
                  <i className="fa fa-envelope me-3"></i>
                  chinesecenterforautomotiveserv@gmail.com
                </a>
              </p>
              <div className="d-flex pt-2">
                {/* <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/profile.php?id=61575092817593"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Opening Hours</h4>
              <h6 className="text-light">Monday - Friday:</h6>
              <p className="mb-4">09.00 AM - 09.00 PM</p>
              <h6 className="text-light">Saturday - Sunday:</h6>
              <p className="mb-0">09.00 AM - 12.00 PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <a className="btn btn-link" href="">
                Diagnostic Test
              </a>
              <a className="btn btn-link" href="">
                Engine Servicing
              </a>
              <a className="btn btn-link" href="">
                Tires Replacement
              </a>
              <a className="btn btn-link" href="">
                Oil Changing
              </a>
              <a className="btn btn-link" href="">
                Vacuam Cleaning
              </a>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Chinese Center for Automotive Services
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
