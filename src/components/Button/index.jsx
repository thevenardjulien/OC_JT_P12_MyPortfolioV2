import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ title, icon, url, target }) => {
  return (
    <button className="button">
      <Link to={url} target={target}>
        <div className="button__content">
          {icon && <span className="button__icon icon">{icon}</span>}
          {title}
        </div>
      </Link>
    </button>
  );
};

export default Button;
