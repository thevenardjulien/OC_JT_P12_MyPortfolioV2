import "./style.scss";
import undertale from "../../assets/img/undertale.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const projets = [
  {
    title: "Mon premier projet",
    img: undertale,
    url: "www.perdu.com",
  },
  {
    title: "Mon premier projet",
    img: undertale,
    url: "www.perdu.com",
  },
  {
    title: "Mon premier projet",
    img: undertale,
    url: "www.perdu.com",
  },
];

const Carousel = () => {
  return (
    <div className="projects">
      <FontAwesomeIcon icon={faAngleLeft} className="projects__arrow" />
      {[...projets].reverse().map((projet, index) => {
        return (
          <div key={index} className="project">
            <Link to={projet.url}>
              <img
                className="project__img"
                src={projet.img}
                alt={projet.title}
              />
              <h3>{projet.title}</h3>
            </Link>
          </div>
        );
      })}
      <FontAwesomeIcon icon={faAngleRight} className="projects__arrow" />
    </div>
  );
};

export default Carousel;
