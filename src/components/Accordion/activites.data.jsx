import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const activites = (
  <ul className="activites">
    <li>
      <span className="activites__icon">
        <FontAwesomeIcon icon={faPen} />
      </span>
      <strong>Concevoir les éléments graphiques</strong> d’une interface
      utilisateur et de supports de communication.
    </li>
    <li>
      <span className="activites__icon">
        <FontAwesomeIcon icon={faDiagramProject} />
      </span>
      Contribuer à la <strong>gestion et au suivi d’un projet</strong> de
      communication numérique.
    </li>
    <li>
      <span className="activites__icon">
        <FontAwesomeIcon icon={faCode} />
      </span>
      <strong>Réaliser, améliorer et animer des sites web.</strong>
    </li>
  </ul>
);