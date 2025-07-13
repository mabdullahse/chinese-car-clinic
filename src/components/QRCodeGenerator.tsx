import React from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const url =
    "https://wa.me/923075386133?text=Hello%20there%2C%20I%20found%20you%20via%20QR%20code";

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Scan this QR code:</h2>
      <QRCode value={url} size={256} />
    </div>
  );
};

export default QRCodeGenerator;
