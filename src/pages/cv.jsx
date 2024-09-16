import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";

const PDFViewer = ({ pdfUrl }) => {
  useEffect(() => {
    // Store the original styles to restore later
    const originalBodyStyle = document.body.style;
    const originalRootStyle = document.getElementById("root").style;

    // Override the body and root styles
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100vh"; // Make body fill the full height
    document.body.style.overflow = "hidden"; // Remove scroll bars

    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100vh"; // Make root fill the full height
      root.style.width = "100vw"; // Ensure root takes the full width
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style = originalBodyStyle;
      if (root) {
        root.style = originalRootStyle;
      }
    };
  }, []);

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `https://drive.google.com/uc?export=download&id=${pdfUrl}`;
    downloadLink.target = "_blank";
    downloadLink.download = "document.pdf";
    downloadLink.click();
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        marginTop: "10rem",
      }}
    >
      <iframe
        src={`https://drive.google.com/file/d/${pdfUrl}/preview`}
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
        title="PDF Viewer"
      ></iframe>

      {/* Floating Download Button */}
      <button
        onClick={handleDownload}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#555",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
      >
        <FaDownload size={24} />
      </button>
    </div>
  );
};

export default PDFViewer;
