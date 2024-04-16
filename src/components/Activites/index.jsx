import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Activites = () => {
  return (
    <>
      <ul className="activites">
        <li>
          <span className="activites__icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <strong>Réaliser</strong>, <strong>améliorer</strong> et{" "}
          <strong>animer</strong> des sites web.
        </li>
        <li>
          <span className="activites__icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <strong>Concevoir les éléments graphiques</strong> d’une interface
          utilisateur et de supports de communication.
        </li>
        <li>
          <span className="activites__icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          Contribuer à la <strong>gestion</strong> et au <strong>suivi</strong>{" "}
          d'un <strong>projet de communication numérique</strong> afin d'assurer
          son bon déroulement.
        </li>
      </ul>
    </>
  );
};

export default Activites;
