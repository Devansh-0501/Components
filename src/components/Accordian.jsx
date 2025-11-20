import "../styles/accordian.css";
import { useState } from "react";



const AccordianContainer = () => {
  const data = [
    {
      title: "Accordian 1",
      body: "akmlkamflkmflkmwlfkmlkf",
    },
    {
      title: "Accordian 2",
      body: "akmlkamflkmflkmwlfkmlkf",
    },
    {
      title: "Accordian 3",
      body: "akmlkamflkmflkmwlfkmlkf",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="accordian">
      <h1>Accordian</h1>
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          clickedIndex={index === openIndex}
          setClickedIndex={() => {
            openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

const AccordianItem = ({ title, body, clickedIndex, setClickedIndex }) => {
  return (
    <div className="accordianItem">
      <div className="title" onClick={() => setClickedIndex(null)}>
        {title}
      </div>
      {clickedIndex && <div className="body">{body}</div>}
    </div>
  );
};

export default function Accordian() {
  return (
   
      <AccordianContainer />
   
  );
}

