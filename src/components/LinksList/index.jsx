import Button from "../Button";
import "./style.scss";
import List from "./list.data";

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
