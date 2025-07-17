function Services() {
  return (
    <>
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(img/carousel-bg-2.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Services
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Our Services //</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div
                className="nav w-100 nav-pills me-4"
                style={{ height: "400px", overflowY: "auto" }}
              >
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3 active"
                  data-bs-toggle="pill"
                  data-bs-target="#service-computer"
                  type="button"
                >
                  <i className="fa fa-laptop fa-2x me-3"></i>
                  <h5 className="m-0">Complete Computer Scan</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-maintenance"
                  type="button"
                >
                  <i className="fa fa-tools fa-2x me-3"></i>
                  <h5 className="m-0">Comprehensive Maintenance</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-engine"
                  type="button"
                >
                  <i className="fa fa-cogs fa-2x me-3"></i>
                  <h5 className="m-0">Engine Overhaul</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-transmission"
                  type="button"
                >
                  <i className="fa fa-cog fa-2x me-3"></i>
                  <h5 className="m-0">Transmission Overhaul</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-electrician"
                  type="button"
                >
                  <i className="fa fa-bolt fa-2x me-3"></i>
                  <h5 className="m-0">Electrical Services</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-suspension"
                  type="button"
                >
                  <i className="fa fa-car-side fa-2x me-3"></i>
                  <h5 className="m-0">Suspension Services</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-oil"
                  type="button"
                >
                  <i className="fa fa-oil-can fa-2x me-3"></i>
                  <h5 className="m-0">Engine & Transmission Oil Change</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-body"
                  type="button"
                >
                  <i className="fa fa-paint-brush fa-2x me-3"></i>
                  <h5 className="m-0">Denting & Painting</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-oven"
                  type="button"
                >
                  <i className="fa fa-fire fa-2x me-3"></i>
                  <h5 className="m-0">Oven Paint</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-pdr"
                  type="button"
                >
                  <i className="fa fa-magic fa-2x me-3"></i>
                  <h5 className="m-0">Paintless Dent Removal</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3 mb-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-amendment"
                  type="button"
                >
                  <i className="fa fa-wrench fa-2x me-3"></i>
                  <h5 className="m-0">Amendments & Repairs</h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-3"
                  data-bs-toggle="pill"
                  data-bs-target="#service-spare"
                  type="button"
                >
                  <i className="fa fa-car fa-2x me-3"></i>
                  <h5 className="m-0">Spare Parts Supply</h5>
                </button>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="tab-content w-100">
                {/* Complete Computer Scan */}
                <div
                  className="tab-pane fade show active"
                  id="service-computer"
                >
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/diagnostic.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Complete Computer Scan"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Complete Computer Scan</h3>
                      <p className="mb-4">
                        Advanced scanning for your car's engine, transmission,
                        ABS, airbags, and more. Get precise diagnostics to
                        prevent future issues.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Engine
                        & Transmission Scan
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>ABS &
                        Airbag Check
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Full
                        System Report
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comprehensive Maintenance */}
                <div className="tab-pane fade" id="service-maintenance">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/maintenance.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Comprehensive Maintenance"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Comprehensive Maintenance</h3>
                      <p className="mb-4">
                        Complete car care services to keep your vehicle in top
                        condition, including regular inspections and preventive
                        maintenance.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Full
                        Vehicle Checkup
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Preventive Services
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Maintenance Scheduling
                      </p>
                    </div>
                  </div>
                </div>

                {/* Engine Overhaul */}
                <div className="tab-pane fade" id="service-engine">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/engine1.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Engine Overhaul"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Engine Overhaul</h3>
                      <p className="mb-4">
                        Professional engine rebuilding services for maximum
                        performance and extended engine life using quality parts
                        and expert care.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Engine
                        Disassembly & Cleaning
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Rebuild
                        with Genuine Parts
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Performance Testing
                      </p>
                    </div>
                  </div>
                </div>

                {/* Transmission Overhaul */}
                <div className="tab-pane fade" id="service-transmission">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/transmission.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Transmission Overhaul"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Transmission Overhaul</h3>
                      <p className="mb-4">
                        Full transmission overhaul services to restore smooth
                        gear shifting and drivetrain performance for both
                        automatic and manual systems.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Transmission Dismantling
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Rebuild
                        & Calibration
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Test &
                        Inspection
                      </p>
                    </div>
                  </div>
                </div>

                {/* Electrical Services */}
                <div className="tab-pane fade" id="service-electrician">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/electrician.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Electrical Services"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Electrical Services</h3>
                      <p className="mb-4">
                        Complete auto-electrical services, from battery and
                        wiring to lighting and advanced electronic systems
                        diagnostics.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Battery
                        & Starter Check
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Wiring
                        & Lighting Repair
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>ECU &
                        Sensor Diagnosis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Suspension Services */}
                <div className="tab-pane fade" id="service-suspension">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/suspension.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Suspension Services"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Suspension Services</h3>
                      <p className="mb-4">
                        Suspension repair and replacement services to ensure a
                        smooth and safe ride, including shocks, struts, and
                        bushings.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Shock &
                        Strut Replacement
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Bushing
                        & Joint Repair
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Steering & Alignment Check
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oil Change */}
                <div className="tab-pane fade" id="service-oil">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/oil.jpeg"
                          style={{ objectFit: "cover" }}
                          alt="Oil Change"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Oil & Fluid Change</h3>
                      <p className="mb-4">
                        Keep your engine and transmission healthy with our
                        high-quality oil and fluid change services using
                        recommended products.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Engine
                        Oil Replacement
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Transmission Fluid Change
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Filter
                        Replacement
                      </p>
                    </div>
                  </div>
                </div>

                {/* Denting & Painting */}
                <div className="tab-pane fade" id="service-body">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/denting.jpeg"
                          style={{ objectFit: "cover" }}
                          alt="Denting and Painting"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Denting & Painting</h3>
                      <p className="mb-4">
                        Full body denting and painting services using
                        professional tools and premium paints to restore your
                        car’s original look.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Body
                        Dent Removal
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Premium
                        Paint Finish
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Color
                        Matching
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oven Paint */}
                <div className="tab-pane fade" id="service-oven">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/oven.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Oven Paint"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Oven Paint</h3>
                      <p className="mb-4">
                        Professional oven-baked painting process for
                        long-lasting, durable paintwork and a flawless finish.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Oven
                        Baked Finish
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Scratch
                        Resistant Coating
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Perfect
                        Shine
                      </p>
                    </div>
                  </div>
                </div>

                {/* Paintless Dent Removal */}
                <div className="tab-pane fade" id="service-pdr">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/Paintless-Dent-Repair-scaled.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Paintless Dent Removal"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Paintless Dent Removal</h3>
                      <p className="mb-4">
                        Remove minor dents and dings without affecting your
                        car’s original paint using specialized tools.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>No
                        Paint Damage
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Quick &
                        Cost Effective
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Eco-Friendly Process
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amendments */}
                <div className="tab-pane fade" id="service-amendment">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/amendment.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Amendments"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Amendments</h3>
                      <p className="mb-4">
                        Correction and improvement services for minor mechanical
                        or bodywork issues after repairs.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Minor
                        Adjustments
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Post
                        Repair Tuning
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Detail
                        Inspection
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spare Parts */}
                <div className="tab-pane fade" id="service-spare">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="img/services/spareparts.jpeg"
                          style={{ objectFit: "cover" }}
                          alt="Spare Parts"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Spare Parts</h3>
                      <p className="mb-4">
                        Genuine and high-quality spare parts for all car makes
                        and models, ensuring durability and performance.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>OEM &
                        Aftermarket Parts
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Warranty Provided
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert
                        Installation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
