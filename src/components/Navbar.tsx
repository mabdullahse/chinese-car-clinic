import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <NavLink
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary flex items-center">
          <img
            src="/img/logo.png"
            alt="Car Logo"
            style={{ maxWidth: "54px" }}
            className="   inline-block"
          />
          شركة المركز الصيني لخدمات السيارات
        </h2>
      </NavLink>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" className="nav-item nav-link  ">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <NavLink to="/service" className="nav-item nav-link">
            Services
          </NavLink>
          <NavLink to="/gallery" className="nav-item nav-link">
            Gallery
          </NavLink>

          {/* <div className="nav-item dropdown">
            <NavLink
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </NavLink>
            <div className="dropdown-menu fade-up m-0">
              <NavLink to="/booking" className="dropdown-item">
                Booking
              </NavLink>
              <NavLink to="/team" className="dropdown-item">
                Technicians
              </NavLink>
              <NavLink to="/testimonial" className="dropdown-item">
                Testimonial
              </NavLink>
              <NavLink to="/404" className="dropdown-item">
                404 Page
              </NavLink>
            </div>
          </div> */}
          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
        </div>
        {/* <NavLink
          to="/contact"
          className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
        >
          Get A Quote<i className="fa fa-arrow-right ms-3"></i>
        </NavLink> */}
      </div>
    </nav>
  );
}

export default Navbar;
