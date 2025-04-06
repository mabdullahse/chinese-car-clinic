import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";

// Import Bootstrap & FontAwesome
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "font-awesome/css/font-awesome.min.css";

// Import Other Libraries
// import "animate.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
