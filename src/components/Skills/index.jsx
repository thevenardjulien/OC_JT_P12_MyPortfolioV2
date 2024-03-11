import { skills } from "./skills.data";
import Button from "../Button";
import "./style.scss";
import { useState } from "react";

const Skills = () => {
  const [category, setCategory] = useState("tout");
  const handleCat = (e) => {
    e.preventDefault();
    setCategory(e.currentTarget.innerText.toLowerCase());
  };

  const skillsToDisplay =
    category === "tout"
      ? [...skills].reverse()
      : [...skills].reverse().filter((skill) => skill.category === category);

  return (
    <>
      <h2>Compétences</h2>
      <div className="skillFilters">
        <span onClick={handleCat}>
          <Button title="Tout" url="#" />
        </span>
        <span onClick={handleCat}>
          <Button title="Dev" url="#" />
        </span>
        <span onClick={handleCat}>
          <Button title="Design" />
        </span>
      </div>
      <div className="skills">
        {skillsToDisplay.map((skill, index) => {
          return (
            <div key={index} className="skill">
              <img className="skill__img" src={skill.logo} alt={skill.name} />
              {skill.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
