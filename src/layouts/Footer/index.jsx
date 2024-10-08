import {
  faBehance,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h3>JULIEN THEVENARD © {year}</h3>
      <ul>
        <li>
          <Link
            to="https://github.com/thevenardjulien"
            target="_Blank"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} className="footer__icon icon" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/julien-thevenard-951988168/"
            target="_Blank"
            aria-label="Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer__icon icon" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.behance.net/julienthevenard1"
            target="_Blank"
            aria-label="Behance"
          >
            <FontAwesomeIcon icon={faBehance} className="footer__icon icon" />
          </Link>
        </li>
        <li>
          <Link
            to="mailto:thevenard.julien@gmail.com"
            target="_Blank"
            aria-label="Email thevenard.julien@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon icon" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
