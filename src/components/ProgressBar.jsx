import { useEffect, useState } from "react";
import "../styles/progressBar.css";

export default function ProgressBar() {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);
  const [widthh, setWidthh] = useState(0);

  useEffect(() => {
    if (time >= 0) {
      console.log(time);
      const timer = setTimeout(() => {
        setWidthh((prev) => prev + 100 / value);
        setTime((time) => time - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else setWidthh(0);
  }, [time]);

  const handleClick = () => {
    console.log(time, value);
    setTime(value);
  };

  return (
    <div className="progressBar">
      <input
        type="number"
        placeholder="setTime"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleClick}>go</button>

      <div className="pro" style={{ width: `${widthh}%` }}>
        {" "}
        {Math.floor(widthh)}{" "}
      </div>
    </div>
  );
}
