import React, { useEffect, useState } from "react";
import "../styles/autoSearch.css";

const AutoSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [dataObject,setdataObject]= useState({"":[]})

  const fetchData = async () => {
    
    const res = await fetch(
      "https://dummyjson.com/recipes/search?q=" + inputValue
    );
    const json = await res.json();
    setData(json?.recipes);
    setdataObject(prev=>({...prev , [inputValue]:json?.recipes} ))//for caching
    
  };

  useEffect(() => {
    if(!dataObject[inputValue]){
    const timer = setTimeout(() => {
      console.log("API Call", inputValue);
      fetchData();
    }, 300);
  
    return ()=>{
      clearTimeout(timer);
    }
  }
  }, [inputValue]);

  return (
    <div className="autoSearch">
      <h1>AutoComplete Search with caching and deBouncing</h1>
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      {isActive > 0 &&
        data.map((i) => {
          return (
            <div className="single-search" key={i.id}>
              {i.name}
            </div>
          );
        })}
    </div>
  );
};

export default AutoSearch;
