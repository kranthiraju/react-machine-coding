import React from "react";

const HighlightText = ({ text, query }) => {
  if (!query) return <span className="suggestion-item">{text}</span>;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) return <span className="suggestion-item">{text}</span>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <span className="suggestion-item">
      {before}
      <b>{match}</b>
      {after}
    </span>
  );
};

const SuggestionList = ({ query, results }) => {
  return (
    <div className="suggestion-list">
      {results?.map((item, index) => (
        <HighlightText key={index} text={item.name} query={query} />
      ))}
    </div>
  );
};

export default SuggestionList;
