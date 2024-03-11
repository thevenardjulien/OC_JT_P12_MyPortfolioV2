import avatar from "../../assets/img/undertale.webp";
import LinksList from "../LinksList";
import "./style.scss";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="hero">
        <img className="hero__img" src={avatar} alt="hero img" />
        <div className="hero__infos">
          <h1 className="hero__infos-title">JULIEN THEVENARD</h1>
          <p className="hero__infos-baseline">Développeur Front-End</p>
        </div>
      </div>
      <LinksList />
    </div>
  );
};

export default Hero;
