import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ title, icon, url }) => {
  return (
    <button className="button">
      <Link to={url} target="_Blank">
        <div className="button__content">
          {icon}
          {title}
        </div>
      </Link>
    </button>
  );
};

export default Button;
