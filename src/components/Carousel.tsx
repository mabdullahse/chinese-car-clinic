function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="img/slider/1.JPG" alt="Image" />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      // Car Servicing //
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      شركة المركز الصيني لخدمات السيارات
                    </h1>
                    <p>
                      **المركز الصيني لصيانة السيارات** نقدم خدمات صيانة وإصلاح
                      سيارات عالية الجودة باستخدام أحدث المعدات وأفضل الخبراء
                      لضمان أداء مثالي لمركبتك.
                    </p>
                  </div>
                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                    <img
                      className="img-fluid"
                      src="img/carousel-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/slider/2.JPG" alt="Image" />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      // Computer Diagnostics //
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      الفحص بالكمبيوتر كامل
                    </h1>
                    <p>
                      تشخيص دقيق لجميع أعطال السيارة باستخدام أحدث أجهزة الفحص
                      الإلكتروني.
                    </p>
                  </div>
                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                    <img
                      className="img-fluid"
                      src="img/carousel-3.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="img/slider/2.JPG" alt="Image" />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      // Full Maintenance //
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      صيانة شاملة
                    </h1>
                    <p>
                      خدمات صيانة دورية كاملة للحفاظ على سيارتك في أفضل حالة
                      وتشمل جميع الأنظمة الأساسية.
                    </p>
                  </div>
                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                    <img
                      className="img-fluid"
                      src="img/carousel-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="img/slider/2.JPG" alt="Image" />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      // Engine Overhaul //
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      توضيب مكينة
                    </h1>
                    <p>
                      إصلاح وتجديد شامل للمحرك لضمان أفضل أداء وعمر أطول
                      للمكينة.
                    </p>
                  </div>
                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                    <img
                      className="img-fluid"
                      src="img/carousel-5.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
