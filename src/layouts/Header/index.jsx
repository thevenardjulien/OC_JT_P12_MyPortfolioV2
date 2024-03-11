import "./style.scss";
import avatar from "../../assets/img/undertale.webp";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <header>
      <div className="logoWrapper">
        <img
          className="logoWrapper__img"
          src={avatar}
          alt="avatar"
          onClick={() => window.scroll(0, 0)}
        />
        <div className="logoWrapper__icon" onClick={() => toggleDarkMode()}>
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </div>
      </div>
      <div>
        <div className="mobileNavBtn" onClick={handleMobileNavBtn}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <nav
          className={displayMobileNav ? "mobileNav" : "mobileNavHidden"}
          onClick={handleMobileNav}
        >
          <span className="mobileNav__xmark" onClick={closeMobileNav}>
            <FontAwesomeIcon icon={faSquareXmark} />
          </span>
          <ul className="mobileNav__ul">
            <li className="mobileNav__li" onClick={() => window.scrollTo(0, 0)}>
              <FontAwesomeIcon icon={faHouse} />
            </li>
            <li className="mobileNav__li">
              <NavLink
                href="#"
                onClick={() =>
                  document
                    .querySelector("#about")
                    .scrollIntoView({ block: "center" })
                }
              >
                À propos
              </NavLink>
            </li>

            <li className="mobileNav__li">
              <NavLink
                href="#"
                onClick={() =>
                  document
                    .querySelector("#skills")
                    .scrollIntoView({ block: "center" })
                }
              >
                Compétences
              </NavLink>
            </li>

            <li className="mobileNav__li">
              <NavLink
                href="#"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ block: "center" })
                }
              >
                Projets
              </NavLink>
            </li>

            <li className="mobileNav__li">
              <NavLink
                href="#"
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

        <nav className="mainNav">
          <ul className="mainNav__ul">
            <li className="mainNav__li" onClick={() => window.scrollTo(0, 0)}>
              <FontAwesomeIcon icon={faHouse} />
            </li>
            <li className="mainNav__li">
              <NavLink
                href="#"
                onClick={() =>
                  document
                    .querySelector("#about")
                    .scrollIntoView({ block: "center" })
                }
              >
                À propos
              </NavLink>
            </li>

            <li className="mainNav__li">
              <NavLink
                href="#"
                onClick={() =>
                  document
                    .querySelector("#skills")
                    .scrollIntoView({ block: "center" })
                }
              >
                Compétences
              </NavLink>
            </li>

            <li className="mainNav__li">
              <NavLink
                href="#"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ block: "center" })
                }
              >
                Projets
              </NavLink>
            </li>

            <li className="mainNav__li">
              <NavLink
                href="#"
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
