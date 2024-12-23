import React, { useState } from "react";
import "./index.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <h1>Start Rating</h1>
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => setRating(num)}
          onMouseLeave={() => setHover(rating)}
          onMouseOver={() => setHover(num)}
        >
          <span
            className={`star ${
              num <= ((rating && hover) || hover) ? "on" : "off"
            }`}
          >
            &#9733;
          </span>
        </button>
      ))}
    </div>
  );
};

export default StarRating;
