import { NavLink } from "react-router-dom";
import "../../assets/Navbar.css";

const Navbar = () => {
  return (
    <div id='Navbar'>
      <div className="container">
        <div id="HeaderLogo">
          <a href="/"><img src="../../assets/media/logo.png" alt="Reklem Logo" /></a>
        </div>
        <div id="HeaderTools">
          <nav>
            <NavLink id="NavLink" to="/aboutCompany" className={({ isActive }) => (isActive ? "active" : "")}>О компании</NavLink>
            <NavLink id="NavLink" to="/catalog" className={({ isActive }) => (isActive ? "active" : "")}>Каталог</NavLink>
            <NavLink id="NavLink" to="/promotions" className={({ isActive }) => (isActive ? "active" : "")}>Акции</NavLink>
            <NavLink id="NavLink" to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Услуги</NavLink>
            <NavLink id="NavLink" to="/contacts" className={({ isActive }) => (isActive ? "active" : "")}>Контакты</NavLink>
          </nav>
          <div id="SoftButtons">
            <div id="BlogDiv"><NavLink id="SoftIcons" to="/blog" className={({ isActive }) => (isActive ? "active" : "")}><i class="fa-solid fa-user"></i></NavLink></div>
            <div id="ShopDiv"><NavLink id="SoftIcons" to="/shopcart" className={({ isActive }) => (isActive ? "active" : "")}><i class="fa-solid fa-cart-shopping"></i></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
