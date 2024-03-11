import "./style.scss";
import oclogo from "../../assets/img/oclogo.jfif";
import onlinelogo from "../../assets/img/onlinelogo.jfif";

const formations = [
  {
    Organism: "OnlineFormapro",
    Job: "Concepteur designer UI",
    Date: "Juillet 2022 - juillet 2023",
    imgSrc: onlinelogo,
  },
  {
    Organism: "OpenClassroom",
    Job: "Développeur web",
    Date: "Août. 2023 - aujourd’hui",
    imgSrc: oclogo,
  },
];

const Experiences = () => {
  return (
    <div className="experiences">
      {[...formations].reverse().map((formation, index) => {
        return (
          <div className="experience" key={index}>
            <img
              className="experience__img"
              src={formation.imgSrc}
              alt={formation.Organism}
            />
            <div>
              <p className="experience__title">{formation.Organism}</p>
              <div>{formation.Job}</div>
              <div>{formation.Date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
