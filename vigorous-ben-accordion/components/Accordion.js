import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState();

  const handleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) {
    return <p>No Items available</p>;
  }

  return (
    <div className="accordion-main">
      {items?.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-title"
            onClick={() => handleIndex(index)}
          >
            {item.title}
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
