import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        {[1, 2, 3, 4, 5].map((num, index) => (
          <i
            key={index}
            style={{ color }}
            className={
              value >= num
                ? "fas fa-star"
                : value >= num - 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        ))}
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFDA1F",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
