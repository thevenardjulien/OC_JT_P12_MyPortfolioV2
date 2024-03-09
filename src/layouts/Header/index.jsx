import "./style.scss";
import avatar from "../../assets/img/undertale.webp";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
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
