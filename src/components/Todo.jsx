import { useState } from "react";
import "../styles/toDo.css";

export default function Todo() {
  const [value, setValue] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setInputArray((prev) => [...prev, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    const newArray = [...inputArray];
    console.log(index, "and", newArray);
    newArray.splice(index, 1);
    console.log(newArray);
    setInputArray(newArray);
  };

  return (
    <div className="todo">
      <div className="input">
        <input
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Enter task"
        />
        <button onClick={handleAdd}>add</button>
      </div>
      <div className="display">
        {inputArray.map((item, index) => {
          return (
            <div key={index} className="task">
              {item}
              <button onClick={() => handleDelete(index)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}