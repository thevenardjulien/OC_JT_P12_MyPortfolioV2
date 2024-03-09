import { useState } from "react";
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
    </div>
  );
};

export default Collapse;
