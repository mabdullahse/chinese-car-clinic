function Topbar() {
  return (
    <div className="container-fluid bg-light p-0">
      <div className={`row gx-0 flex-col-mob  d-lg-flex`}>
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>
              <a
                href="https://www.google.com/maps/place/21%C2%B015'26.2%22N+40%C2%B026'33.4%22E/@21.2573696,40.4426195,103m/data=!3m1!1e3!4m4!3m3!8m2!3d21.2572737!4d40.4426174?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                الطائف ' الصناعية ' شارع المعارض ' مقابل صرافه الأهلي
              </a>
            </small>
          </div>

          <div className="h-100 me-3 d-inline-flex  align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small>**دوام من 8:00 صباحاً حتى 9:00 مساءً**</small>
          </div>
          <div className="h-100  d-inline-flex align-items-center py-3">
            <small>VAT : 313050843400003</small>
          </div>
        </div>

        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>
              <a href="tel:+966507259008">+966507259008</a>
            </small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a
              className="btn btn-sm-square bg-white text-primary me-1"
              href="https://www.facebook.com/profile.php?id=61575092817593"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a className="btn btn-sm-square bg-white text-primary me-1" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-sm-square bg-white text-primary me-0" href="">
              <i className="fab fa-instagram"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
