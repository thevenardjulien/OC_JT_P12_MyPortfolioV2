import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <h3>JULIEN THEVENARD © 2024</h3>
      <ul>
        <li>
          <Link to="https://github.com/thevenardjulien" target="_Blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/julien-thevenard-951988168/"
            target="_Blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li>
          <Link to="mailto:thevenard.julien@gmail.com" target="_Blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
