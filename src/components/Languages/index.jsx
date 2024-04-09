import fr from "../../assets/img/fr.webp";
import en from "../../assets/img/uk.webp";
import "./style.scss";

const Languages = () => {
  return (
    <div className="languages">
      <span className="languages__wrapper">
        <img className="languages__img" src={fr} alt="fr" />
        Français
      </span>
      <span className="languages__wrapper">
        <img className="languages__img" src={en} alt="fr" />
        Anglais C1
      </span>
    </div>
  );
};

export default Languages;
