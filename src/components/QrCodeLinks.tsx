const qrData = [
  {
    label: "الموقع المركز الصيني",
    img: "/img/locations/location-qr.png", // Replace with your QR code image path
  },
  {
    label: "وتس المركز الصيني",
    img: "/img/locations/whatsapp-qr.png", // Replace with your QR code image path
  },
];

const QrCodeLinks = () => {
  return (
    <div className="container text-center my-5">
      <h4 className="mb-4 text-muted fw-medium">تواصل معنا عبر الكود</h4>
      <div className="row justify-content-center">
        {qrData.map((qr, index) => (
          <div key={index} className="col-6 col-md-4 mb-3">
            <div className="qr-card p-3 bg-white rounded shadow-sm">
              <img
                src={qr.img}
                alt={qr.label}
                className="img-fluid qr-image mb-2"
              />
              <p className="small text-muted mb-0">{qr.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QrCodeLinks;
