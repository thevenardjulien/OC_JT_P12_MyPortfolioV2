import Collapse from "../Collapse";
import "./style.scss";
import Experiences from "../Experiences";

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion__menu">
        <Collapse title="FORMATIONS" content={<Experiences />} />
        <Collapse title="COMPÉTENCES" content="Ceci est mon content" />
        <Collapse title="LANGUES" content="Ceci est mon content" />
      </div>
      <div className="accordion__content"></div>
    </div>
  );
};

export default Accordion;
