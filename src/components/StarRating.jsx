import { useState } from "react";
import "../styles/starRating.css";

export default function StarRating() {
  const filledStar =
    "https://www.vhv.rs/dpng/d/426-4264924_cute-star-vector-star-icon-svg-hd-png.png";
  const emptyStar =
    "https://www.iconpacks.net/icons/1/free-star-icon-984-thumb.png";

  // keep state as booleans (or 0/1) — simpler to render
  const [stars, setStars] = useState([0, 0, 0, 0, 0]);

  const handleClick = (idx) => {
    console.log("clicked", idx);
    // create NEW array: mark 1 for indexes <= idx, else 0
    const updated = stars.map((_, i) => (i <= idx ? 1 : 0));
    setStars(updated);
  };

  return (
    
      <div className="star">
        {stars.map((v, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="image"
            style={{ cursor: "pointer" }}
          >
            <img src={v ? filledStar : emptyStar} alt={`star-${index}`} />
          </div>
        ))}
      </div>
  
  );
}