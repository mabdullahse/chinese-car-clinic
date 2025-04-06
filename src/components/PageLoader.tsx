import { useEffect, useState } from "react";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  // useEffect to hide the spinner after 1ms (same as the setTimeout with 1ms in JS)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the spinner after 1ms (mimicking original behavior)
    }, 500);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default PageLoader;
