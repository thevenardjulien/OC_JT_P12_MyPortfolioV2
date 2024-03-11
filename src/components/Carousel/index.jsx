import "./style.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { projets } from "./projets.data";

const Carousel = () => {
  const [sliceFirstValue, setSliceFirstValue] = useState(0);
  const [sliceSecondValue, setSliceSecondValue] = useState(3);
  const handleLeft = () => {
    if (sliceFirstValue >= 1) {
      setSliceFirstValue(() => sliceFirstValue - 1);
      setSliceSecondValue(() => sliceSecondValue - 1);
    }
  };
  const handleRight = () => {
    if (sliceSecondValue <= projets.length - 1) {
      setSliceFirstValue(() => sliceFirstValue + 1);
      setSliceSecondValue(() => sliceSecondValue + 1);
    }
  };
  return (
    <div className="projects">
      {projets.length > 3 && (
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={
            sliceFirstValue === 0
              ? "projects__arrow projects__arrow-left hidden"
              : "projects__arrow projects__arrow-left"
          }
          onClick={handleLeft}
        />
      )}
      {[...projets]
        .reverse()
        .slice(sliceFirstValue, sliceSecondValue)
        .map((projet, index) => {
          return (
            <div key={index} className="project">
              <Link to={projet.url}>
                <img
                  className="project__img"
                  src={projet.img}
                  alt={projet.title}
                />
                <h3 className="project__title">
                  {projet.title}
                  <img
                    className="project__title-img"
                    src={projet.icon}
                    alt={projet.title}
                  />
                </h3>
              </Link>
            </div>
          );
        })}
      {projets.length > 3 && (
        <FontAwesomeIcon
          icon={faAngleRight}
          className={
            sliceSecondValue === projets.length
              ? "projects__arrow projects__arrow-right hidden"
              : "projects__arrow projects__arrow-right"
          }
          onClick={handleRight}
        />
      )}
    </div>
  );
};

export default Carousel;
