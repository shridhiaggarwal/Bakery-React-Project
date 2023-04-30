import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MenuPage from "./Pages/MenuPage";
import ServicesPage from "./Pages/ServicesPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import ScrollToTopButton from "./containers/ScrollToTopButton";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </HashRouter>
    </>
  );
}

export default App;
