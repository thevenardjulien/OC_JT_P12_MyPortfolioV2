import "./style.scss";
import avatar from "../../assets/img/undertale.webp";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  const handleMobileNavBtn = (e) => {
    e.stopPropagation();
    setDisplayMobileNav(!displayMobileNav);
  };

  const handleMobileNav = (e) => {
    e.stopPropagation();
  };

  const closeMobileNav = () => {
    setDisplayMobileNav(false);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setDisplayMobileNav(false);
    });
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <header>
      <div className="logoWrapper">
        <img
          tabIndex="0"
          className="logoWrapper__img"
          src={avatar}
          alt="avatar"
          onClick={() => window.scroll(0, 0)}
        />
        <div
          className="logoWrapper__icon icon"
          onClick={() => toggleDarkMode()}
          tabIndex="0"
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </div>
      </div>
      <div>
        <div
          className="mobileNavBtn icon"
          onClick={handleMobileNavBtn}
          tabIndex="0"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav
          className={displayMobileNav ? "mobileNav" : "mobileNavHidden"}
          onClick={handleMobileNav}
        >
          <span className="mobileNav__xmark icon" onClick={closeMobileNav}>
            <FontAwesomeIcon icon={faSquareXmark} />
          </span>
          <ul className="mobileNav__ul">
            <li className="mobileNav__li">
              <Link to="#about" scroll={scrollWithOffset}>
                À propos
              </Link>
            </li>
            <li className="mobileNav__li">
              <Link to="#testimonials" scroll={scrollWithOffset}>
                Témoignages
              </Link>
            </li>
            <li className="mobileNav__li">
              <Link to="#projects" scroll={scrollWithOffset}>
                Projets
              </Link>
            </li>
            <li className="mobileNav__li">
              <Link to="#skills" scroll={scrollWithOffset}>
                Compétences
              </Link>
            </li>
            <li className="mobileNav__li">
              <Link to="#contact" scroll={scrollWithOffset}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="mainNav">
          <ul className="mainNav__ul">
            <li className="mainNav__li" tabIndex="0">
              <NavLink
                to="/"
                onClick={() =>
                  document
                    .querySelector("#about")
                    .scrollIntoView({ block: "center" })
                }
              >
                À propos
              </NavLink>
            </li>

            <li className="mainNav__li" tabIndex="0">
              <NavLink
                to="/"
                onClick={() =>
                  document
                    .querySelector("#testimonials")
                    .scrollIntoView({ block: "center" })
                }
              >
                Témoignages
              </NavLink>
            </li>

            <li className="mainNav__li" tabIndex="0">
              <NavLink
                to="/"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ block: "center" })
                }
              >
                Projets
              </NavLink>
            </li>

            <li className="mainNav__li" tabIndex="0">
              <NavLink
                to="/"
                onClick={() =>
                  document
                    .querySelector("#skills")
                    .scrollIntoView({ block: "center" })
                }
              >
                Compétences
              </NavLink>
            </li>

            <li className="mainNav__li" tabIndex="0">
              <NavLink
                to="/"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ block: "center" })
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
