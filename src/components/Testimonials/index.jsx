import Testimonial from "../Testimonial";
import { temoignages } from "../Testimonial/temoignages.data";
import "./style.scss";

const Testimonials = () => {
  return (
    <div className="testimonialsWrapper">
      <h2 tabIndex={1}>Témoignages</h2>
      <div className="testimonials">
        {temoignages.map((temoignage, index) => {
          return <Testimonial {...temoignage} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
