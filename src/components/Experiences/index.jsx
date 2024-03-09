import "./style.scss";
import { experiences } from "./experiences.data";

const Experiences = () => {
  return (
    <div className="experiences">
      {[...experiences].reverse().map((experience, index) => {
        return (
          <div className="experience" key={index}>
            <img
              className="experience__img"
              src={experience.imgSrc}
              alt={experience.Organism}
            />
            <div>
              <p className="experience__title">{experience.Organism}</p>
              <div>{experience.Job}</div>
              <div>{experience.Date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
