import Collapse from "../Collapse";
import Experiences from "../Experiences";
import Languages from "../Languages";
import "./style.scss";

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion__menu">
        <Collapse title="FORMATIONS" content={<Experiences />} />
        <Collapse title="COMPÉTENCES" content="À venir ..." />
        <Collapse title="LANGUES" content={<Languages />} />
      </div>
      <div className="accordion__content"></div>
    </div>
  );
};

export default Accordion;
