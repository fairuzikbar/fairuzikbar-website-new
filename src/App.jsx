import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portofolio from "./pages/portofolio";
import Resume from "./pages/resume";
import Footer from "./components/Footer/Footer";
import PDFViewer from "./pages/cv";
import { LanguageProvider } from "./components/LanguageContext.jsx"; // Ensure this path is correct

function App() {
  const googleDriveFileId = "12O6w9q_OZEaKu1eS922ipSnibq-2GCTc"; // Replace with your actual Google Drive file ID
  return (
    <>
      <LanguageProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/download-cv"
              element={<PDFViewer pdfUrl={googleDriveFileId} />}
            />
          </Routes>
        </Router>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
