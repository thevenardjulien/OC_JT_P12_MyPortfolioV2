import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = [
  {
    title: "Github",
    icon: <FontAwesomeIcon icon={faGithub} />,
    url: "https://github.com/thevenardjulien",
  },
  {
    title: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    url: `https://www.linkedin.com/in/julien-thevenard-951988168/`,
  },
  {
    title: "thevenard.julien@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    url: `mailto: thevenard.julien@gmail.com`,
  },
];

export default List;
