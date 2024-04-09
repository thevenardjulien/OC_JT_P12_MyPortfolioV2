import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <h3>JULIEN THEVENARD © 2024</h3>
      <ul>
        <li>
          <Link to="https://github.com/thevenardjulien" target="_Blank">
            <FontAwesomeIcon icon={faGithub} className="footer__icon icon" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/julien-thevenard-951988168/"
            target="_Blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer__icon icon" />
          </Link>
        </li>
        <li>
          <Link to="https://www.behance.net/julienthevenard1" target="_Blank">
            <FontAwesomeIcon icon={faBehance} className="footer__icon icon" />
          </Link>
        </li>
        <li>
          <Link to="mailto:thevenard.julien@gmail.com" target="_Blank">
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon icon" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
