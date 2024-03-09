import "./style.scss";

const Collapse = ({ title, content }) => {
  return (
    <div className="collapse">
      <div className="collapse__title">{title}</div>
      <div className="collapse__content">{content}</div>
    </div>
  );
};

export default Collapse;
