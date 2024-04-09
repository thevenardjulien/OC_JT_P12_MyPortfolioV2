import Button from "../Button";
import "./style.scss";
import List from "./list.data";

const LinksList = () => {
  return (
    <div className="Links" tabIndex={0}>
      {[...List].map((item, index) => {
        return (
          <Button
            key={index}
            title={item.title}
            icon={item.icon}
            url={item.url}
            target="_Blank"
          />
        );
      })}
    </div>
  );
};

export default LinksList;
