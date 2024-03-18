import "./style.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { projets } from "./projets.data";
import Card from "../Card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const Carousel = () => {
  const [sliceFirstValue, setSliceFirstValue] = useState(0);
  const [sliceSecondValue, setSliceSecondValue] = useState(3);
  const [lgScreen, setLgScreen] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setLgScreen(true);
        setSliceFirstValue(0);
        setSliceSecondValue(3);
      } else {
        setLgScreen(false);
        setSliceFirstValue(0);
        setSliceSecondValue(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

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
      {projets.length > 3 && lgScreen && (
        <FontAwesomeIcon
          tabIndex={1}
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
            <Card
              key={index}
              content={
                <div className="project">
                  <Link to={projet.url} target="_Blank">
                    {projet.stack.map((stack, index) => {
                      return (
                        <img
                          key={index}
                          className={`project__stackImg project__stackImg${index}`}
                          src={stack.img}
                          alt={stack.alt}
                        />
                      );
                    })}
                    <img
                      className="project__img"
                      src={projet.img}
                      alt={projet.title}
                    />

                    <h3 className="project__title" tabIndex={1}>
                      {projet.title}
                      {projet.github === true ? (
                        <span className="project__icon">
                          <FontAwesomeIcon icon={faGithub} />
                        </span>
                      ) : (
                        ""
                      )}
                    </h3>
                    <p className="project__description">{projet.description}</p>
                  </Link>
                </div>
              }
            />
          );
        })}
      {projets.length > 3 && lgScreen && (
        <FontAwesomeIcon
          tabIndex={1}
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
