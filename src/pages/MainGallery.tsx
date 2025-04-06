import { useState } from "react";

const MainGallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  // Image list (Replace with your actual images)
  const images = Array.from(
    { length: 22 },
    (_, i) => `img/workshop/${i + 1}.JPG`
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Image Gallery</h2>
      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="gallery-item">
              <img
                src={img}
                className="img-thumbnail"
                onClick={() => setSelectedImage(img)}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={() => setSelectedImage("")}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body text-center">
                <img
                  src={selectedImage}
                  className="img-fluid rounded shadow-lg"
                  alt="Selected"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainGallery;
