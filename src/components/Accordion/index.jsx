import Collapse from "../Collapse";

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion__menu">
        <Collapse title="bonjour" content="ceci est mon content" />
      </div>
      <div className="accordion__content"></div>
    </div>
  );
};

export default Accordion;
