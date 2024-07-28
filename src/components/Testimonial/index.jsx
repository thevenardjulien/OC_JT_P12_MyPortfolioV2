import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Testimonial = ({ avatar, user, job, stars, review }) => {
  const starIcons = [];
  for (let i = 0; i < stars; i++) {
    starIcons.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }
  return (
    <div className="testimonial">
      <img className="testimonial__avatar" src={avatar} alt="avatar" />
      <div className="testimonial__user">
        <h3 className="testimonial__username">{user}</h3>
        <p className="testimonial__job">{job}</p>
      </div>
      <span className="testimonial__stars">{starIcons}</span>
      <p className="testimonial__review">{review}</p>
    </div>
  );
};

export default Testimonial;
