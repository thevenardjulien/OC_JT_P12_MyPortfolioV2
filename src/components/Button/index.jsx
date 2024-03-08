import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ title, url }) => {
  return (
    <button className="button">
      <Link to={url} target="_Blank">
        {title}
      </Link>
    </button>
  );
};

export default Button;
