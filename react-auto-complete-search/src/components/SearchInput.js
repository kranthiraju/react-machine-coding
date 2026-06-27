import React, { useState, useEffect } from "react";

const SearchInput = ({ fetchData }) => {
  const [text, setText] = useState();

  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // if (!text.trim()) return;
    // add debounce of 300ms wait to call API after user types
    const timer = setTimeout(() => {
      fetchData(text);
    }, 300);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      <input type="text" className="search-input" onChange={handleText} />
    </div>
  );
};

export default SearchInput;
