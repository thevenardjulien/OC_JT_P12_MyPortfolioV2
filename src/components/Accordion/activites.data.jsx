import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const activites = (
  <ul className="activites">
    <li>
      <span className="activites__arrow">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
      <strong>Concevoir les éléments graphiques</strong> d’une interface
      utilisateur et de supports de communication.
    </li>
    <li>
      <span className="activites__arrow">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
      Contribuer à la <strong>gestion et au suivi d’un projet</strong> de
      communication numérique.
    </li>
    <li>
      <span className="activites__arrow">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
      <strong>Réaliser, améliorer et animer des sites web.</strong>
    </li>
  </ul>
);
