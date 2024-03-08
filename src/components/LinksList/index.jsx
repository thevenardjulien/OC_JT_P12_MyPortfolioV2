import Button from "../Button";
import "./style.scss";

const LinksList = () => {
  return (
    <div className="Links">
      {[...List].map((item, index) => {
        return <Button key={index} title={item.title} url={item.url} />;
      })}
    </div>
  );
};

export default LinksList;

const List = [
  {
    title: "Github",
    url: "https://github.com/thevenardjulien",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/julien-thevenard-951988168/",
  },
  {
    title: "thevenard.julien@gmail.com",
    url: "mailto: thevenard.julien@gmail.com",
  },
];
