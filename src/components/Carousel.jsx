import { useEffect, useState } from "react";
import "../styles/carousel.css";

export default function Carousel() {
  const imageArray = [
    "https://picsum.photos/id/34/400",
    "https://picsum.photos/id/2/400",
    "https://picsum.photos/id/132/400",
    "https://picsum.photos/id/13/400",
    "https://picsum.photos/id/145/400",
  ];

  useEffect(() => {
    const t = setInterval(() => {
      rightClick();
    }, 3000);

    return () => {
      clearInterval(t);
    };
  }, []);

  const [active, setActive] = useState(0);

  const leftClick = () => {
    setActive((prev) => (prev - 1 < 0 ? imageArray.length - 1 : prev - 1));
  };

  const rightClick = () => {
    setActive((value) => (value + 1) % imageArray.length);
  };

  return (
    <div className="carousel">
      <img
        className="arrow"
        onClick={leftClick}
        src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        alt="left arrow"
      />
      <img className="carousel-img" src={imageArray[active]} alt="image" />
      <img
        className="arrow"
        onClick={rightClick}
        src="https://cdn-icons-png.freepik.com/512/32/32213.png"
        alt="right arrow"
      />
    </div>
  );
}
