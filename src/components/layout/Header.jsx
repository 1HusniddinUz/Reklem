import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../../assets/Header.css";
import Navbar from "../ui/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutCompany from "../../pages/AboutCompany";
import Catalog from "../../pages/Catalog";
import Promotions from "../../pages/Promotions";
import Services from "../../pages/Services";
import Contacts from "../../pages/Contacts";
import Blog from "../../pages/Blog";
import ShopCart from "../../pages/ShopCart";
import ScrollToTop from "../../components/ui/ScrollToTop";
function Header() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/aboutCompany" element={<AboutCompany />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shopcart" element={<ShopCart />} />
      </Routes>
    </Router>
  );
}

export default Header;
