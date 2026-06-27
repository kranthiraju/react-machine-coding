import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import SuggestionList from "../components/SuggestionList";

const AutoCompleteSearchBoxContainer = () => {
  const [query, setQuery] = useState();
  const [results, setResults] = useState();
  const [cacheData, setCacheData] = useState({});

  const fetchData = async (text) => {
    setQuery(text);
    // check in cache and fetch
    if (cacheData[text]) {
      setResults(cacheData[text]);
      return;
    }
    // API call
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${text}`);
    const json_data = await data.json();
    setResults(json_data.recipes);

    // add results to cacheData
    setCacheData((prev) => ({ ...prev, [text]: json_data.recipes }));
  };

  return (
    <div className="container">
      <SearchInput fetchData={fetchData} />
      <SuggestionList query={query} results={results} />
    </div>
  );
};

export default AutoCompleteSearchBoxContainer;
