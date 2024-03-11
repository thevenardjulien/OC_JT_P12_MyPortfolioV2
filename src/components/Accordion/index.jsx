import Activites from "../Activites";
import Collapse from "../Collapse";
import Experiences from "../Experiences";
import Languages from "../Languages";

const Accordion = () => {
  return (
    <div className="accordion">
      <Collapse title="FORMATIONS" content={<Experiences />} />
      <Collapse title="ACTIVITÉS" content={<Activites />} />
      <Collapse title="LANGUES" content={<Languages />} />
    </div>
  );
};

export default Accordion;
