import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Collapse = ({ title, content }) => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <div className="collapse">
      <div className="collapse__title" onClick={handleClick}>
        <h3>{title}</h3>
      </div>
      <div
        className={
          hidden
            ? "collapse__content collapse__content-hidden"
            : "collapse__content"
        }
      >
        {content}
      </div>
      <FontAwesomeIcon
        icon={faChevronUp}
        className={
          hidden ? "collapse__chevron-inactive" : "collapse__chevron-active"
        }
        onClick={handleClick}
      />
    </div>
  );
};

export default Collapse;
