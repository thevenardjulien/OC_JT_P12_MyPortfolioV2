import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ title, icon, url, target, active }) => {
  return (
    <button className={active ? "button button__active" : "button"}>
      <Link to={url} target={target}>
        <div className="button__content">
          {icon && <span className="button__icon">{icon}</span>}
          {title}
        </div>
      </Link>
    </button>
  );
};

export default Button;
